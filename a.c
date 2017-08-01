struct user
{
	char niCheng[33];
	long number;
	char personal[333];
	char hometown[200];
	char address[100];
	char email[150];
	int qAge;
};
//面向对象的编程
int main(){

	struct user xep;
	strcpy(xep.niCheng,"小二平");
	xep.number=756517553;
	strcpy(xep.personal,"男 26岁 天蝎座");
	strcpy(xep.hometown,"中国 宁夏 中卫 中宁县");
	strcpy(xep.address,"西安");
	strcpy(xep.eamil,"756517553@qq.com");
	xep.age=333;

	return 0;
}

