import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Typography from '@mui/material/Typography';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<div>
		<div style={{display: "flex", justifyContent: "center"}}>
			<App />
		</div>
	</div>
);