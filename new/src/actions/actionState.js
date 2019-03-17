// Создаю экшен, где задаю событие в клче тайп и передю его в ключ пейлод. 
// А сама функция для для отслеживания событий и предачи его в редьюсер.

function setChangeToChecked (check) {
	return {
		type: 'CHANGE_BOOL_CHECKED',
		payload: {
			arrIdx: check.arrIdx,
			checkBull: check.checkBull
		}
	};
}

export default setChangeToChecked;