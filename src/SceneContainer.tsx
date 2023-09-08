import { Vector3 } from '@babylonjs/core'
import { FC } from 'react';
import { Engine, Scene, Camera } from 'react-babylonjs'
type Props = { children?: React.ReactNode };
const SceneContainer: FC<Props> = ({ children }) => {
	return (
		<div style={{ flex: 1, display: 'flex bg-transparent' }}>
			<Engine antialias adaptToDeviceRatio canvasId="babylon-canvas">
				<Scene>

					<freeCamera
						name="camera1"
						position={new Vector3(0, 5, -10)}
						setTarget={[Vector3.Zero()]} />

					<hemisphericLight
						name="light1"
						intensity={1}
						direction={new Vector3(0, 1, 0)} />

					{children}</Scene>
			</Engine>
		</div>
	);
}


export default SceneContainer;
