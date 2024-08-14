import React from 'react';
import { ReactFlow } from '@xyflow/react';

import '@xyflow/react/dist/style.css';

const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: <h2 style={{ color: 'white', textAlign: 'center' }}>Unique UI Designs</h2> }, style: { border: '1px solid black', padding: '10px', borderRadius: '5px', backgroundColor: 'orange' } },
    { id: '2', position: { x: 0, y: 150 }, data: { label: <h4 style={{ color: '#41271e' }}>Figma</h4> }, style: { border: '1px solid black', padding: '10px', borderRadius: '5px', backgroundColor: '#989594' } },
];

const initialEdges = [
    { id: 'e1-2', source: '1', target: '2', animated: true },
];

const styles = {
    background: 'transparent',
    borderBottomRightRadius:'120px',
};

const UiFlow = () => {
    return (
        <div style={{ width: '200px', height: '300px' }}>
            <ReactFlow style={styles} nodes={initialNodes} edges={initialEdges} />
        </div>
    );
};

export default UiFlow;