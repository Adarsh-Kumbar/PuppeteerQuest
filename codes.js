module.exports = {
    answers:[
        `#include<bits/stdc++.h>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> ar(n);
    int sum = 0;

    for (int i = 0; i < n; i++) {
        cin >> ar[i];
        sum += ar[i];
    }

    cout << sum << endl;

    return 0;
}

`
,

`
#include <bits/stdc++.h>

using namespace std;

int main() {
    int a1, a2, a3, alicePoint = 0, b1, b2, b3, bobPoint = 0;
    cin >> a1 >> a2 >> a3;
    cin >> b1 >> b2 >> b3;
    alicePoint = ((a1 > b1? 1:0)) + ((a2 > b2? 1:0)) + ((a3 > b3? 1:0));
    bobPoint = ((a1 < b1? 1:0)) + ((a2 < b2? 1:0)) + ((a3 < b3? 1:0));
    cout << alicePoint << " " << bobPoint ;
    return 0;
}
`
,

`
#include <iostream>
#include <vector>

using namespace std;

long long aVeryBigSum(vector<long long> &ar) {
    long long sum = 0;
    for (long long num : ar) {
        sum += num;
    }
    return sum;
}

int main() {
    int n;
    cin >> n;
    vector<long long> ar(n);

    for (int i = 0; i < n; i++) {
        cin >> ar[i];
    }

    long long result = aVeryBigSum(ar);
    cout << result << endl;

    return 0;
}


`
,

`
#include <bits/stdc++.h>

using namespace std;

string ltrim(const string &);
string rtrim(const string &);
vector<string> split(const string &);

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */



int diagonalDifference(vector<vector<int>> arr) {

    int sum_1 = 0, sum_2 = 0;
    int dim = arr.size();
    for(int i = 0; i < dim; ++i)
    {
        sum_1 += arr[i][i];
        sum_2 += arr[i][dim - i - 1];
    }
    
    return abs(sum_1 - sum_2);
}



int main()
{
    ofstream fout(getenv("OUTPUT_PATH"));

    string n_temp;
    getline(cin, n_temp);

    int n = stoi(ltrim(rtrim(n_temp)));

    vector<vector<int>> arr(n);

    for (int i = 0; i < n; i++) {
        arr[i].resize(n);

        string arr_row_temp_temp;
        getline(cin, arr_row_temp_temp);

        vector<string> arr_row_temp = split(rtrim(arr_row_temp_temp));

        for (int j = 0; j < n; j++) {
            int arr_row_item = stoi(arr_row_temp[j]);

            arr[i][j] = arr_row_item;
        }
    }

    int result = diagonalDifference(arr);

    fout << result << "\n";

    fout.close();

    return 0;
}

string ltrim(const string &str) {
    string s(str);

    s.erase(
        s.begin(),
        find_if(s.begin(), s.end(), not1(ptr_fun<int, int>(isspace)))
    );

    return s;
}

string rtrim(const string &str) {
    string s(str);

    s.erase(
        find_if(s.rbegin(), s.rend(), not1(ptr_fun<int, int>(isspace))).base(),
        s.end()
    );

    return s;
}

vector<string> split(const string &str) {
    vector<string> tokens;

    string::size_type start = 0;
    string::size_type end = 0;

    while ((end = str.find(" ", start)) != string::npos) {
        tokens.push_back(str.substr(start, end - start));

        start = end + 1;
    }

    tokens.push_back(str.substr(start));

    return tokens;
}

`

,

`
#include <bits/stdc++.h>

using namespace std;

string ltrim(const string &);
string rtrim(const string &);
vector<string> split(const string &);

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

void plusMinus(vector<int> arr) {
    double sp, sn, sz, pa = 1.0 / arr.size();
    sp = sn = sz = 0;
    for(int i = 0; i < arr.size(); i++){
        if(arr[i] > 0) sp+= pa;
        else if(arr[i]<0) sn+= pa;
        else sz+= pa;
    }
    cout << setprecision(6) << fixed;
    cout << sp <<endl;
    cout << sn <<endl;
    cout << sz <<endl;
}

int main()
{
    string n_temp;
    getline(cin, n_temp);

    int n = stoi(ltrim(rtrim(n_temp)));

    string arr_temp_temp;
    getline(cin, arr_temp_temp);

    vector<string> arr_temp = split(rtrim(arr_temp_temp));

    vector<int> arr(n);

    for (int i = 0; i < n; i++) {
        int arr_item = stoi(arr_temp[i]);

        arr[i] = arr_item;
    }

    plusMinus(arr);

    return 0;
}

string ltrim(const string &str) {
    string s(str);

    s.erase(
        s.begin(),
        find_if(s.begin(), s.end(), not1(ptr_fun<int, int>(isspace)))
    );

    return s;
}

string rtrim(const string &str) {
    string s(str);

    s.erase(
        find_if(s.rbegin(), s.rend(), not1(ptr_fun<int, int>(isspace))).base(),
        s.end()
    );

    return s;
}

vector<string> split(const string &str) {
    vector<string> tokens;

    string::size_type start = 0;
    string::size_type end = 0;

    while ((end = str.find(" ", start)) != string::npos) {
        tokens.push_back(str.substr(start, end - start));

        start = end + 1;
    }

    tokens.push_back(str.substr(start));

    return tokens;
}

`

,

`
#include <bits/stdc++.h>
using namespace std;
int main()
{
    int n;
    cin >> n;
    for(int i = 1; i <= n; i++) {
        string s(n-i, ' '), e(i, '#');
        cout << s + e << endl;
    }

    return 0;
}
`

,

`
#include <bits/stdc++.h>

using namespace std;

string ltrim(const string &);
string rtrim(const string &);
vector<string> split(const string &);

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

void miniMaxSum(vector<int> arr) {
    long s = arr.size();
    long min=0, max=0;

    sort(arr.begin(),arr.begin()+s);
    
    for(int i=0;i<4;i++){
        min += arr[i];
    }

    for(int i=s-1;i>s-5;i--){
        max += arr[i];
    }
    cout<<min<<" "<<max<<"\n";
}
int main()
{

    string arr_temp_temp;
    getline(cin, arr_temp_temp);

    vector<string> arr_temp = split(rtrim(arr_temp_temp));

    vector<int> arr(5);

    for (int i = 0; i < 5; i++) {
        int arr_item = stoi(arr_temp[i]);

        arr[i] = arr_item;
    }

    miniMaxSum(arr);

    return 0;
}

string ltrim(const string &str) {
    string s(str);

    s.erase(
        s.begin(),
        find_if(s.begin(), s.end(), not1(ptr_fun<int, int>(isspace)))
    );

    return s;
}

string rtrim(const string &str) {
    string s(str);

    s.erase(
        find_if(s.rbegin(), s.rend(), not1(ptr_fun<int, int>(isspace))).base(),
        s.end()
    );

    return s;
}

vector<string> split(const string &str) {
    vector<string> tokens;

    string::size_type start = 0;
    string::size_type end = 0;

    while ((end = str.find(" ", start)) != string::npos) {
        tokens.push_back(str.substr(start, end - start));

        start = end + 1;
    }

    tokens.push_back(str.substr(start));

    return tokens;
}

`

,

`
#include <iostream>

int main(){
    int c, n, max = 0;
    std::cin.ignore();
    while(std::cin >> n)
        max < n ? c = !!(max = n) : c += max == n;
    std::cout << c;
    return 0;
}
`

,

`
#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
#include <sstream>
#include <iomanip>
using namespace std;

int main(){
    int h, m, s;
    char ch, aorp;
    
    cin >> h >> ch >> m >> ch >> s >> aorp >> ch;
    h = (aorp == 'A') ? (h==12 ? 0 : h) : (h==12 ? 12 : h+12);
        
    cout << setw(2) << setfill('0') << h << ":" 
         << setw(2) << setfill('0') << m << ":" 
         << setw(2) << setfill('0') << s << endl;
    
    return 0;
}
`
]
}