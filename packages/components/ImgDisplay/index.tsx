import React from "react";
import classNames from 'classnames';
export interface IImgDisplay {
    source: string;
    width?: number | string;
    height?: number | string;
    style?: React.CSSProperties;
    className?: string;
}
const ImgDisplay: React.FC<IImgDisplay> = (props) => {
    const { source, width, height, className } = props;
    return (<img src={source} className={classNames(className, 'img-display')} width={width || 300} height={height || 300}/>)  
}
export default ImgDisplay;