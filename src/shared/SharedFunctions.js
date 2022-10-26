export function RefineSearch(list, conditions) {
	const filteredData = list.filter(pos => {
		if (conditions === '') {
			return pos;
		} else {
			return pos.name.toLowerCase().includes(conditions);
		}
	});
	return filteredData;
}
