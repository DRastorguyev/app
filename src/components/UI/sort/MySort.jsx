import React from 'react';
import MyButton from '../button/MyButton';
import cl from '../sort/MySort.module.css'

const MySort = () => {
	return (
		<div className={cl.mySort}>
			<div>
				<MyButton>Все</MyButton>
				<MyButton>Готовые</MyButton>
				<MyButton>Активные</MyButton>
			</div>
			<div className={cl.sort__btn} >
				<p style={{marginRight: 5}} >Отсортировать по дате</p>
				<MyButton><i class="fas fa-chevron-up"></i></MyButton>
				<MyButton><i class="fas fa-chevron-down"></i></MyButton>
			</div>
		</div>
	);
};

export default MySort;