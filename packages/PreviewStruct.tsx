import React from 'react';
import  StructModelDisplay, {  IStructModelDisplay } from './components/StructModelDisplay';
import StructImage, { IStructImage } from './components/StructImageDisplay';
import ImgDispaly, { IImgDisplay } from './components/ImgDisplay';
import { TStructExtension, getTypeCategory } from './utils';
 
export interface PreviewStructPropsBase {
    sourceType: "content" | "url",
    source: string;
    type: string;
}
// @ts-ignore
type mixPropsBase<T> = T extends Record<string, any> ? PreviewStructPropsBase & T : PreviewStructPropsBase;
// type TDisplayProps = IStructImage | IStructImage | IStructModelDisplay;
export type IStructImageMix = mixPropsBase<IStructImage>;
export type IStructModelMix = mixPropsBase<IStructModelDisplay>;
export type IImageMix = mixPropsBase<IImgDisplay>;

const PreviewStruct: React.FC<PreviewStructPropsBase> = (props) => {
    const { type, source, sourceType } = props;
    const category = getTypeCategory(type);
    if (category === 'img') {
        return <ImgDispaly {...props}></ImgDispaly>
    }
    if (category === 'structImg') {
        return <StructImage {...props} type='tiff'/>
    }

    if (category === 'structModel') {
        return (<StructModelDisplay
									{...props}
                  content={sourceType === 'content' ?  source : null}
									source={sourceType === 'url' ? source : null}
									format={type as TStructExtension}
                />)
    }
    return (<div>the format is not supported</div>);
}
export default PreviewStruct;