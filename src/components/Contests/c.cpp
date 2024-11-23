#include <bits/stdc++.h>

using namespace std;

class Student {
public:
    int id;
    string name;
    char section;
    int marks;

    Student(int id, string name, char section, int marks) {
        this->id = id;
        this->name = name;
        this->section = section;
        this->marks = marks;
    }
};

Student* bestStd(Student* s1, Student* s2, Student* s3) {
    Student* best = s1;
    
    if (s2->marks > best->marks || (s2->marks == best->marks && s2->id < best->id)) {
        best = s2;
    }

    if (s3->marks > best->marks || (s3->marks == best->marks && s3->id < best->id)) {
        best = s3;
    }

    return best;
}

int main() {
    int t;
    cin >> t;

    while (t--) {
        int id, marks;
        string name;
        char section;

        Student* s1 = nullptr;
        Student* s2 = nullptr;
        Student* s3 = nullptr;

        cin >> id >> name >> section >> marks;
        s1 = new Student(id, name, section, marks);

        cin >> id >> name >> section >> marks;
        s2 = new Student(id, name, section, marks);

        cin >> id >> name >> section >> marks;
        s3 = new Student(id, name, section, marks);

        Student* best = bestStd(s1, s2, s3);
        cout << best->id << " " << best->name << " " 
             << best->section << " " << best->marks << endl;

        delete s1;
        delete s2;
        delete s3;
    }

    return 0;
}
