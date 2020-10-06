##### Перед тестированием выполнить команду: 
```sh 
npm install
```
##### Параметры:
* -a/--action: encode или decode  
* -s/--shift: число  
* -i/--input: Путь к файлу на чтение. Если не указан параметр, ввод будет из командной строки. Необязательный параметр. 
* -o/--output: Путь к файлу на запись. Если не указан параметр, вывод будет в консоль. Необязательный параметр.  
 
##### Примеры:
```sh
node index.js --action encode --shift 5
node index.js -a encode -s 1 -i .\inputFile.txt
node index.js -a decode -s 5 -i .\inputFile.txt -o .\outputFile.txt
node index.js -a encode -s 3 -o .\outputFile.txt
```