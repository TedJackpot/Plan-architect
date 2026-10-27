import assert from 'node:assert/strict';
import {mkdirSync,writeFileSync} from 'node:fs';
import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {sceneGLTF} from '../lib/gltf.ts';
import {pdfData} from '../lib/exports.ts';
import {DEFAULT,generate} from '../lib/engine.ts';
mkdirSync('outputs',{recursive:true});const p=generate(DEFAULT);for(const format of['A4','A3']){const pdf=pdfData(p,DEFAULT,format),s=new TextDecoder().decode(pdf);assert.ok(s.startsWith('%PDF-1.4'));assert.ok(s.includes('Document indicatif'));assert.ok(s.endsWith('%%EOF'));writeFileSync(`outputs/test-${format}.pdf`,pdf);}
const scene=new THREE.Group(),mesh=new THREE.Mesh(new THREE.BoxGeometry(2,3,4),new THREE.MeshStandardMaterial({color:0x123456}));mesh.position.set(5,6,7);scene.add(mesh);const doc=sceneGLTF(scene);assert.equal(doc.asset.version,'2.0');assert.deepEqual(doc.accessors[0].min,[4,4.5,5]);assert.deepEqual(doc.accessors[0].max,[6,7.5,9]);assert.ok(doc.extras.notice.startsWith('Document indicatif.'));if(typeof globalThis.ProgressEvent==='undefined'){(globalThis as any).ProgressEvent=class ProgressEvent extends Event{lengthComputable:boolean;loaded:number;total:number;constructor(type:string,init:any){super(type);this.lengthComputable=init.lengthComputable;this.loaded=init.loaded;this.total=init.total;}};}
const loaded=await new GLTFLoader().parseAsync(JSON.stringify(doc),'');assert.equal(loaded.scene.children.length,1);const box=new THREE.Box3().setFromObject(loaded.scene);assert.deepEqual(box.min.toArray(),[4,4.5,5]);assert.deepEqual(box.max.toArray(),[6,7.5,9]);writeFileSync('outputs/test-maquette.gltf',JSON.stringify(doc));console.log('PDF A4/A3 et glTF standard relu par Three.GLTFLoader : réussis.');
