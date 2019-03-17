// Создаю экшен, где задаю событие в клче тайп и передю его в ключ пейлод. 
// А сама функция для для отслеживания событий и предачи его в редьюсер.

function setChangeToChecked(check) {
	const {type, arrIdx, quantity} = check;

	return {
		type,
		payload: {
			arrIdx,
			quantity
		}
	};
}

export default setChangeToChecked;