function sum(a, b)
{
	return a + b;
}

function isPalindrome(str) {
	let reverseStr = str.split("").reverse().join("").toLowerCase;
	if (str.toLowerCase == reverseStr) {
		return true;
	};
	return false;
}

function isStrongPassword(password) {
	let hasLetter = /[A-Za-z]/.test(password);
	let hasNumer = /[0-9]/.test(password);
	let hasSpecialChar = /[!@#$]/.test(password);

	return password.length >= 16 && hasLetter && hasNumer && hasSpecialChar;

}

function isWeakPassword(password) {
	let hasLetter = /[A-Za-z]/.test(password);
	let hasNumer = /[0-9]/.test(password);
	let hasSpecialChar = /[!@#$]/.test(password);

//	если пароль короче или равен 8 символам → слабый
//если нет хотя бы одной буквы → слабый
//если нет цифры → слабый
//если нет спецсимвола → слабый
	return password.length <= 8 || !hasLetter || !hasNumber || !hasSpecialChar;

}

function countWords(str) {
	// убираем лишние пробелы по краям и разделяем по одному или более пробелам
	//if (!s.trim()) return 0; // строка только из пробелов
	//return s.trim().split(/\s+/).length;

	return str.trim().split(" ").length;
}

function lengthOfLastWord(str) {
	let i = str.length - 1;

	// пропускаем хвостовые пробелы
	while (i >= 0 && str[i] === ' ') i--;

	// считаем длину последнего слова
	let len = 0;
	while (i >= 0 && str[i] !== ' ') {
		len++;
		i--;
	}
	return len;
}

function longestCommonPrefix(strs) {
	if (!strs || strs.length === 0) return "";

	// Берём первую строку за основу
	let prefix = strs[0];

	for (let i = 1; i < strs.length; i++) {
		// Пока текущая строка не начинается с prefix, укорачиваем prefix
		while (strs[i].indexOf(prefix) !== 0) {
			prefix = prefix.slice(0, -1);
			if (prefix === "") return "";
		}
	}
	return prefix;
}

function climbStairs(n) {
	if (n <= 2) return n;

	let prev1 = 1, prev2 = 2; // ways(1)=1, ways(2)=2
	for (let i = 3; i <= n; i++) {
		let curr = prev1 + prev2;
		prev1 = prev2;
		prev2 = curr;
	}
	return prev2;
}


// ------------------------------------------------------------------------Remove Duplicates from Sorted List--------------------------------------------------
// Узел списка
class ListNode {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}

// Построить список из массива (для тестов)
function fromArray(arr) {
	let dummy = new ListNode(0);
	let tail = dummy;
	for (const v of arr) {
		tail.next = new ListNode(v);
		tail = tail.next;
	}
	return dummy.next;
}

// Преобразовать список в массив (для тестов)
function toArray(head) {
	const out = [];
	while (head) {
		out.push(head.val);
		head = head.next;
	}
	return out;
}

/**
 * Удаляет дубликаты из отсортированного списка.
 * O(n) по времени, O(1) по памяти.
 */
function deleteDuplicates(head) {
	let cur = head;
	while (cur && cur.next) {
		if (cur.val === cur.next.val) {
			// пропускаем узел-дубликат
			cur.next = cur.next.next;
		} else {
			cur = cur.next;
		}
	}
	return head;
}


//-----------------------------------------------------------------------------Symmetric Tree----------------------------------------------------------------
// Узел бинарного дерева
class TreeNode {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

/**
 * Построение дерева из level-order массива с null,
 * например: [1,2,2,3,4,4,3]
 */
function treeFromArray(arr) {
	if (!arr || arr.length === 0 || arr[0] == null) return null;
	const root = new TreeNode(arr[0]);
	const q = [root];
	let i = 1;

	while (q.length && i < arr.length) {
		const node = q.shift();

		// левый
		if (i < arr.length) {
			const v = arr[i++];
			if (v != null) {
				node.left = new TreeNode(v);
				q.push(node.left);
			}
		}
		// правый
		if (i < arr.length) {
			const v = arr[i++];
			if (v != null) {
				node.right = new TreeNode(v);
				q.push(node.right);
			}
		}
	}
	return root;
}

/**
 * Проверяет, является ли дерево зеркально-симметричным относительно центра.
 * Рекурсивно сравниваем левое и правое поддеревья как зеркала.
 */
function isSymmetric(root) {
	function isMirror(a, b) {
		if (!a && !b) return true;
		if (!a || !b) return false;
		return a.val === b.val && isMirror(a.left, b.right) && isMirror(a.right, b.left);
	}
	return isMirror(root?.left || null, root?.right || null);
}

module.exports = { sum, isPalindrome, isStrongPassword, isWeakPassword, countWords, lengthOfLastWord, longestCommonPrefix, climbStairs, ListNode, fromArray, toArray, deleteDuplicates, TreeNode, treeFromArray, isSymmetric };