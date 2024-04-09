// import PreviewStruct from '../lib/index.es.js';
import PreviewStruct from '../packages/index';
import './App.css'

function App() {


  return (
    <>
      <div>
        <p>struct model example</p>
        <PreviewStruct 
          type="cif" 
          sourceType="url" 
          source="https://materials-fe.oss-cn-hangzhou-zjy-d01-a.ops.cloud.zhejianglab.com/42-0N-SV-Sc.cif"
        />
      </div>
      <div>
        <p>img example</p>
        <PreviewStruct 
          type="png" 
          sourceType="url" 
          source="https://materials-fe.oss-cn-hangzhou-zjy-d01-a.ops.cloud.zhejianglab.com/IMG_202403018376_125x95.png"
        />
      </div>
      <div>
        <p>tiff example</p>
        <PreviewStruct 
          type="tiff" 
          sourceType="url" 
          source="https://materials-fe.oss-cn-hangzhou-zjy-d01-a.ops.cloud.zhejianglab.com/Pasted%20Graphic.tiff"
        />
      </div>
      <div>
        <p>svg example</p>
        <PreviewStruct 
          type="svg" 
          sourceType="url" 
          source="https://materials-fe.oss-cn-hangzhou-zjy-d01-a.ops.cloud.zhejianglab.com/0.svg"
        />
      </div>

    </>
  )
}

export default App
