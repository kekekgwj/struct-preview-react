import React from "react";
//@ts-ignore
import { TIFFViewer } from '@coderedm0nztr/react-tiff'

export interface IStructImage {
    source: string;
    width?: number | string;
    height?: number | string;
    style?: React.CSSProperties;
    className?: string;
	type: "tiff";
}
const TiFFRender: React.FC<Omit<IStructImage, 'type'>>= (props) => {
	const { source } = props;

	return (
		<TIFFViewer
			tiff={source}
			lang='en' // en | de | fr | es | tr
			paginate='ltr' // bottom | ltr
			buttonColor='#141414'
			printable
	  />
	)
};
const StructImageDisplay: React.FC<IStructImage> = (props) => {
    const { source, width, height, className } = props;
    const w = String(width || '');
    const h = String(height || '');
	const compProps = {
		source,
		width: w,
		height: h,
		className,
	}
	
	return <TiFFRender {...compProps}/>
	

}
export default StructImageDisplay;