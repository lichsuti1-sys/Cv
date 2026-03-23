// Sample C++ files data
const filesData = [
    {
        id: 1,
        name: "binary_search.cpp",
        category: "algorithm",
        description: "Thuật toán tìm kiếm nhị phân trên mảng đã sắp xếp",
        content: `#include <iostream>
#include <vector>
using namespace std;

int binarySearch(vector<int>& arr, int target) {
    int left = 0;
    int right = arr.size() - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target)
            return mid;
        else if (arr[mid] < target)
            left = mid + 1;
        else
            right = mid - 1;
    }
    
    return -1;
}

int main() {
    vector<int> arr = {1, 3, 5, 7, 9, 11, 13};
    int target = 7;
    
    int result = binarySearch(arr, target);
    
    if (result != -1)
        cout << "Phần tử tìm thấy tại vị trí: " << result << endl;
    else
        cout << "Không tìm thấy phần tử" << endl;
    
    return 0;
}`,
        size: "1.2 KB"
    },
    {
        id: 2,
        name: "quick_sort.cpp",
        category: "algorithm",
        description: "Thuật toán sắp xếp nhanh (Quick Sort)",
        content: `#include <iostream>
#include <vector>
using namespace std;

int partition(vector<int>& arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    
    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return i + 1;
}

void quickSort(vector<int>& arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

int main() {
    vector<int> arr = {10, 7, 8, 9, 1, 5};
    quickSort(arr, 0, arr.size() - 1);
    
    cout << "Mảng sau khi sắp xếp: ";
    for (int num : arr)
        cout << num << " ";
    cout << endl;
    
    return 0;
}`,
        size: "1.1 KB"
    },
    {
        id: 3,
        name: "linked_list.cpp",
        category: "data-structure",
        description: "Cấu trúc dữ liệu danh sách liên kết đơn",
        content: `#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
    
    Node(int val) : data(val), next(nullptr) {}
};

class LinkedList {
private:
    Node* head;
    
public:
    LinkedList() : head(nullptr) {}
    
    void insert(int val) {
        Node* newNode = new Node(val);
        if (!head) {
            head = newNode;
            return;
        }
        
        Node* temp = head;
        while (temp->next)
            temp = temp->next;
        temp->next = newNode;
    }
    
    void display() {
        Node* temp = head;
        while (temp) {
            cout << temp->data << " -> ";
            temp = temp->next;
        }
        cout << "NULL" << endl;
    }
    
    ~LinkedList() {
        while (head) {
            Node* temp = head;
            head = head->next;
            delete temp;
        }
    }
};

int main() {
    LinkedList list;
    list.insert(10);
    list.insert(20);
    list.insert(30);
    list.display();
    
    return 0;
}`,
        size: "1.3 KB"
    },
    {
        id: 4,
        name: "student_manager.cpp",
        category: "project",
        description: "Hệ thống quản lý sinh viên đơn giản",
        content: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

struct Student {
    int id;
    string name;
    float gpa;
};

class StudentManager {
private:
    vector<Student> students;
    
public:
    void addStudent(int id, string name, float gpa) {
        students.push_back({id, name, gpa});
        cout << "Thêm sinh viên thành công!" << endl;
    }
    
    void displayAll() {
        if (students.empty()) {
            cout << "Danh sách trống!" << endl;
            return;
        }
        
        cout << "\\nDanh sách sinh viên:" << endl;
        for (const auto& s : students) {
            cout << "ID: " << s.id << ", Name: " << s.name 
                 << ", GPA: " << s.gpa << endl;
        }
    }
    
    void searchById(int id) {
        for (const auto& s : students) {
            if (s.id == id) {
                cout << "Tìm thấy: " << s.name << " - GPA: " << s.gpa << endl;
                return;
            }
        }
        cout << "Không tìm thấy sinh viên với ID: " << id << endl;
    }
};

int main() {
    StudentManager manager;
    int choice;
    
    do {
        cout << "\\n=== Quản Lý Sinh Viên ===" << endl;
        cout << "1. Thêm sinh viên" << endl;
        cout << "2. Hiển thị tất cả" << endl;
        cout << "3. Tìm kiếm theo ID" << endl;
        cout << "0. Thoát" << endl;
        cout << "Chọn: ";
        cin >> choice;
        
        if (choice == 1) {
            int id;
            string name;
            float gpa;
            cout << "Nhập ID: "; cin >> id;
            cout << "Nhập tên: "; cin.ignore(); getline(cin, name);
            cout << "Nhập GPA: "; cin >> gpa;
            manager.addStudent(id, name, gpa);
        }
        else if (choice == 2) {
            manager.displayAll();
        }
        else if (choice == 3) {
            int id;
            cout << "Nhập ID: "; cin >> id;
            manager.searchById(id);
        }
    } while (choice != 0);
    
    return 0;
}`,
        size: "2.1 KB"
    },
    {
        id: 5,
        name: "file_reader.cpp",
        category: "utility",
        description: "Đọc và hiển thị nội dung file văn bản",
        content: `#include <iostream>
#include <fstream>
#include <string>
using namespace std;

void readFile(const string& filename) {
    ifstream file(filename);
    
    if (!file.is_open()) {
        cout << "Không thể mở file: " << filename << endl;
        return;
    }
    
    string line;
    int lineNum = 1;
    
    cout << "Nội dung file:" << endl;
    cout << "==================" << endl;
    
    while (getline(file, line)) {
        cout << lineNum++ << ": " << line << endl;
    }
    
    file.close();
}

int main() {
    string filename;
    cout << "Nhập tên file: ";
    cin >> filename;
    
    readFile(filename);
    
    return 0;
}`,
        size: "0.9 KB"
    },
    {
        id: 6,
        name: "calculator.cpp",
        category: "utility",
        description: "Máy tính đơn giản hỗ trợ các phép toán cơ bản",
        content: `#include <iostream>
using namespace std;

double calculate(double a, double b, char op) {
    switch(op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/':
            if (b != 0) return a / b;
            else {
                cout << "Lỗi: Chia cho 0!" << endl;
                return 0;
            }
        default:
            cout << "Phép toán không hợp lệ!" << endl;
            return 0;
    }
}

int main() {
    double num1, num2;
    char op;
    
    cout << "Nhập phép tính (vd: 5 + 3): ";
    cin >> num1 >> op >> num2;
    
    double result = calculate(num1, num2, op);
    cout << num1 << " " << op << " " << num2 << " = " << result << endl;
    
    return 0;
}`,
        size: "0.8 KB"
    }
];

let currentCategory = 'all';
let searchTerm = '';

// Load files on page load
document.addEventListener('DOMContentLoaded', () => {
    loadFiles();
    updateCounts();
    
    // Add event listeners
    document.getElementById('searchInput').addEventListener('input', (e) => {
        searchTerm = e.target.value.toLowerCase();
        loadFiles();
    });
    
    // Category click handlers
    document.querySelectorAll('.category-item').forEach(item => {
        item.addEventListener('click', (e) => {
            document.querySelectorAll('.category-item').forEach(cat => {
                cat.classList.remove('active');
            });
            item.classList.add('active');
            currentCategory = item.dataset.category;
            loadFiles();
        });
    });
});

function loadFiles() {
    let filteredFiles = filesData;
    
    // Filter by category
    if (currentCategory !== 'all') {
        filteredFiles = filteredFiles.filter(file => file.category === currentCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
        filteredFiles = filteredFiles.filter(file => 
            file.name.toLowerCase().includes(searchTerm) ||
            file.description.toLowerCase().includes(searchTerm)
        );
    }
    
    displayFiles(filteredFiles);
}

function displayFiles(files) {
    const grid = document.getElementById('filesGrid');
    
    if (files.length === 0) {
        grid.innerHTML = '<div class="no-results">Không tìm thấy công việc nào</div>';
        return;
    }
    
    grid.innerHTML = files.map(file => `
        <div class="file-card" onclick="openFile(${file.id})">
            <div class="file-icon">${getFileIcon(file.category)}</div>
            <div class="file-name">${file.name}</div>
            <div class="file-description">${file.description}</div>
            <div class="file-meta">
                <span class="category-badge">${getCategoryName(file.category)}</span>
                <span>${file.size}</span>
            </div>
        </div>
    `).join('');
}

function getFileIcon(category) {
    const icons = {
        'algorithm': '🔬',
        'data-structure': '📊',
        'project': '🚀',
        'utility': '🛠️'
    };
    return icons[category] || '📄';
}

function getCategoryName(category) {
    const names = {
        'algorithm': 'Thuật toán',
        'data-structure': 'Cấu trúc dữ liệu',
        'project': 'Dự án',
        'utility': 'Tiện ích'
    };
    return names[category] || category;
}

function updateCounts() {
    document.getElementById('totalFiles').textContent = filesData.length;
    document.getElementById('allCount').textContent = filesData.length;
    
    const categories = ['algorithm', 'data-structure', 'project', 'utility'];
    categories.forEach(cat => {
        const count = filesData.filter(file => file.category === cat).length;
        const elementId = cat === 'data-structure' ? 'dataStructureCount' : 
                          cat === 'algorithm' ? 'algorithmCount' :
                          cat === 'project' ? 'projectCount' : 'utilityCount';
        document.getElementById(elementId).textContent = count;
    });
}

function openFile(fileId) {
    const file = filesData.find(f => f.id === fileId);
    if (!file) return;
    
    document.getElementById('modalTitle').textContent = file.name;
    document.getElementById('fileName').textContent = file.name;
    document.getElementById('fileCategory').textContent = getCategoryName(file.category);
    document.getElementById('fileSize').textContent = file.size;
    
    // Display code with syntax highlighting
    const codeElement = document.getElementById('fileContent');
    codeElement.textContent = file.content;
    
    // Simple syntax highlighting
    highlightCode(codeElement);
    
    document.getElementById('fileModal').style.display = 'block';
    
    // Setup download button
    const downloadBtn = document.getElementById('downloadBtn');
    downloadBtn.onclick = () => downloadFile(file);
}

function highlightCode(element) {
    let content = element.textContent;
    // Simple C++ keyword highlighting
    const keywords = ['#include', 'using', 'namespace', 'int', 'float', 'double', 
                     'char', 'string', 'void', 'return', 'if', 'else', 'for', 
                     'while', 'class', 'public', 'private', 'struct', 'new', 'delete'];
    
    keywords.forEach(keyword => {
        const regex = new RegExp(`\\b${keyword}\\b`, 'g');
        content = content.replace(regex, `<span style="color: #569cd6;">${keyword}</span>`);
    });
    
    // Highlight strings
    content = content.replace(/(\".*?\")/g, '<span style="color: #ce9178;">$1</span>');
    
    // Highlight comments
    content = content.replace(/(\/\/.*$)/gm, '<span style="color: #6a9955;">$1</span>');
    
    element.innerHTML = content;
}

function downloadFile(file) {
    const blob = new Blob([file.content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function closeModal() {
    document.getElementById('fileModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = (event) => {
    const modal = document.getElementById('fileModal');
    if (event.target === modal) {
        closeModal();
    }
};
