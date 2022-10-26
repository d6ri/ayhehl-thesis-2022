export function RefinePositionSearch(list, searchText, filterDepartment) {
	const filteredData = list.filter(pos => {
		// only search condition given
		if (searchText !== '' && filterDepartment.length == 0) {
			return pos.name.toLowerCase().includes(searchText);
		}
		// only department given
		else if (searchText === '' && filterDepartment.length > 0) {
			return filterDepartment.includes(pos.department);
		}
		// no search conditions --> return all elements
		else if (searchText === '' && filterDepartment.length == 0) {
			return pos;
		}
		// search condition + filtered department
		else if (searchText !== '' && filterDepartment.length > 0) {
			return (
				filterDepartment.includes(pos.department) &&
				pos.name.toLowerCase().includes(searchText)
			);
		}
	});
	return filteredData;
}
