## Background
Supports preview of material related files
Included format:
webp, bmp, Icon,jpg, jpeg, gif, png, heic, svg
"Evaluation", "cif", "PDB", "the cube", "xyz", "self", 'mol2', 'lammpstrj', 'vasp', 'tiff', 'poscar', 'contcar'

## Basic Usage
import PreviewStruct from 'struct-preview-react'

<PreviewStruct 
  type="cif" 
  sourceType="url" 
  source="https://materials-fe.oss-cn-hangzhou-zjy-d01-a.ops.cloud.zhejianglab.com/42-0N-SV-Sc.cif"
/>