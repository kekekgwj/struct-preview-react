## Background
Support previewing material related file
Including format:
'webp', 'bmp', 'ico', 'jpg', 'jpeg', 'gif', 'png', 'heic', 'svg'
'pqr',  'cif', 'pdb', 'cube', 'xyz','sdf', 'mol2', 'lammpstrj', 'vasp', 'tiff', 'poscar', 'contcar'

## Basic Usage
import PreviewStruct from 'struct-preview-react/lib'

<PreviewStruct 
  type="cif" 
  sourceType="url" 
  source="https://materials-fe.oss-cn-hangzhou-zjy-d01-a.ops.cloud.zhejianglab.com/42-0N-SV-Sc.cif"
/>