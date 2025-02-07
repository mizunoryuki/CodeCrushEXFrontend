export const questionCode =
    '#include <stdio.h>\n\
int my_sum(int*, int);\n\
int main() {\n\
    int ary[5] = {1,2,3,4,5};\n\
    int sum = 0;\n\
    int i;\n\
    sum = my_sum(ary, sizeof(ary) / sizeof(int));\n\
    for(i = 0; i < 5; i++) {\n\
        printf("%d ", ary[i]);\n\
    }\n\
    printf("\\n");\n\
    printf("sum = %d\\n", sum);\n\
    return 0;\n\
}\n\
int my_sum(int* ary, int size) {\n\
    int sum = 0;\n\
    int i;\n\
    for(i = 0; i < size; i++) {\n\
        sum += *(ary + i);\n\
    }\n\
    return sum;\n\
}';
