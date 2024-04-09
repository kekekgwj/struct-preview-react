import React, { useEffect } from "react";
import { TStructExtension } from '../../utils';
// @ts-ignore
import * as $3Dmol from '3dmol/build/3Dmol.js';
export interface IStructModelDisplay {
	source: string | null;
	content: string | null;
	width?: number | string;
	height?: number | string;
	style?: React.CSSProperties;
	className?: string;
	format: TStructExtension;
}
const renderChart = (data: string, format: TStructExtension) => {
	try {
		const config = { backgroundColor: 'white' };
		const element = document.getElementById('displayMol');
		const viewer1 = $3Dmol.createViewer(element, config);
		viewer1.addModel(data, format);
		viewer1.setStyle({ stick: { radius: 0.1 }, sphere: { radius: 0.3 }, width: '400px' });
		viewer1.render();
		viewer1.zoomTo();
	} catch (e) {
		console.error(e);
	}
};
const StructModelDisplay: React.FC<IStructModelDisplay> = (props) => {
	const { source, width = 300, height = 300, className, style, format, content } = props;


	const getPreviewFile = async (previewUrl: string) => {
		try {
			const response = await fetch(previewUrl || "https://materials-fe.oss-cn-hangzhou-zjy-d01-a.ops.cloud.zhejianglab.com/42-0N-SV-Sc.cif");
			const streamReader = response?.body?.getReader();
			let content = '';
			const read = () => {
				streamReader?.read().then(({ done, value }) => {
					// 判断是否已经读取完所有数据
					if (done) {
						renderChart(content, format);
						return;
					}
	
					// 处理读取到的数据（value）
					const uint8Array = new Uint8Array(value); // 对应 "Hello" 的 ASCII 码
	
					// 创建 TextDecoder 对象
					const textDecoder = new TextDecoder('utf-8');
	
					// 将 Uint8Array 转换为字符串
					const resultString = textDecoder.decode(uint8Array);
					content = content.concat(resultString);
					// 继续递归读取下一块数据
					return read();
				});
			};
			read();
		} catch (error) {
			console.error('Error fetching notebook:', error);
		}
	};

	useEffect(() => {
		if (content) {
			renderChart(content, format)
		} else {
			if (source) {
				getPreviewFile(source);
			}
		}
	}, [source, content])
	return (  
		<div 
			id="displayMol" className={className} 
			style={{ 
				backgroundColor: 'white', height: height, width: width,
				position:'relative',
				...style}}
		/>
	)
}
export default StructModelDisplay;