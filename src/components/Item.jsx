import { Divider, List  } from 'antd';
import React from 'react';

const Item = () => {

	const data = [
		'Racing fdsfsdf',
		'fdfsdfsdfsdfsdfsd',
		'fsdfsdfsdfsdfsdfsdfs',
		'fgjfgjrktrjrtjrtjrtjrtjtrjrt'
	]

	return (
		<div>
			<Divider orientation="left">Large Size</Divider>
    	<List
      	size="large"
      	header={<div>Header</div>}
      	footer={<div>Footer</div>}
      	bordered
      	dataSource={data}
      	renderItem={item => <List.Item>{item}</List.Item>}
    	/>
		</div>
	);
};

export default Item;