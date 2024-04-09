export const imageExtensions = ['webp', 'bmp', 'ico', 'jpg', 'jpeg', 'gif', 'png', 'heic', 'svg'];
export type TStructExtension = 'pqr' | 'cif' | 'pdb' | 'cube' | 'xyz' | 'sdf' | 'mol2' | 'lammpstrj' | 'vasp';

export const structExtensions = [
    'pqr',
    'cif',
    'pdb',
    'cube',
    'xyz',
    'sdf',
    'mol2',
    'lammpstrj',
    'vasp',
  ];

  export const textExtensions = [
    'pdf',
    'txt',
    'json',
    'out',
    'log',
    'dat',
    'mat',
    'pdb',
    'msg',
    'pdbq',
    'prt',
    'sta',
    'skf',
    'shear',
    'hhr',
    'a3m',
    'com',
    'bash',
    'java',
    'py',
    'js',
    'stp',
    'yaml',
    'msh',
    'sh',
  ];
  export const structImagesExtensions = ['tiff'];

  export const vaspFilesExtension = ['poscar', 'contcar'];

  export function getFileName(url: string) {
    const num = url.lastIndexOf('/') + 1;
    let fileName = url.substring(num);
    //把参数和文件名分割开
    fileName = decodeURI(fileName.split('?')[0]);
    return fileName;
  }

  export function extensionPreview(fileName: string) {
    const fileExtensionAry = fileName.split('.');
    if (fileExtensionAry.length < 2) return 'none';
    const fileExtension = fileExtensionAry[1].toLowerCase();
    if (!fileExtension) return 'none';
  
    if (imageExtensions.includes(fileExtension)) return 'image';
    if (textExtensions.includes(fileExtension)) return 'text';
    if (structExtensions.includes(fileExtension)) return fileExtension;
    if (vaspFilesExtension.includes(fileExtension)) return 'vasp';
    if (structImagesExtensions.includes(fileExtension)) return fileExtension;
    return 'none';
  }
  export type TCategories = 'structModel' | 'structImg' | 'img' | null;
  export function getTypeCategory(type: string): TCategories {
    const typeMin = type.toLowerCase();
    if (structExtensions.includes(typeMin)) {
      return 'structModel';
    }
    if (structImagesExtensions.includes(typeMin)) {
      return 'structImg';
    }
    if (imageExtensions.includes(typeMin)) {
      return 'img';
    }

    return null;

  }