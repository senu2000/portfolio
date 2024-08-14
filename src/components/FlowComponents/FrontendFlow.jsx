import React from 'react';
import { ReactFlow } from '@xyflow/react';

import '@xyflow/react/dist/style.css';

const initialNodes = [
    { id: '1', position: { x: 50, y: 0 }, data: { label: <h2 style={{ color: 'white', textAlign: 'center' }}>Front-End Development</h2> }, style: { border: '1px solid black', padding: '10px', borderRadius: '5px', backgroundColor: 'orange' } },
    { id: '2', position: { x: 0, y: 100 }, data: { label: <h4 style={{ color: '#5ED3F3' }}>React</h4> }, style: { border: '1px solid black', padding: '10px', borderRadius: '5px', backgroundColor: '#9191bd' } },
    { id: '3', position: { x: 100, y: 150 }, data: { label: <h4 style={{ color: '#E34D26' }}>HTML</h4> }, style: { border: '1px solid black', padding: '10px', borderRadius: '5px', backgroundColor: '#ffe0e0' } },
    { id: '4', position: { x: 0, y: 200 }, data: { label: <h4 style={{ color: '#0377BC' }}>CSS</h4> }, style: { border: '1px solid black', padding: '10px', borderRadius: '5px', backgroundColor: '#e0e1ff' } },
    { id: '5', position: { x: 100, y: 250 }, data: { label: <h4 style={{ color: '#D4B830' }}>JavaScript</h4> }, style: { border: '1px solid black', padding: '10px', borderRadius: '5px', backgroundColor: '#fff0e0' } },
];

const initialEdges = [
    { id: 'e1-2', source: '1', target: '2', animated: true },
    { id: 'e1-3', source: '1', target: '3', animated: true },
    { id: 'e1-4', source: '1', target: '4', animated: true },
    { id: 'e1-5', source: '1', target: '5', animated: true },
];

const styles = {
    background: 'transparent',
    borderBottomRightRadius:'110px',
};

const FrontendFlow = () => {
    return (
        <div style={{ width: '300px', height: '300px' }}>
            <ReactFlow style={styles} nodes={initialNodes} edges={initialEdges} />
        </div>
    );
};

export default FrontendFlow;
