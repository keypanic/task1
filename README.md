npm install

--action: encode или decode <br/>
--shift: число <br/>
--input: Путь к файлу на чтение. Если не указан(или файл не существует), то ввод будет из консоли. Необязательный параметр. <br/>
--output: Путь к файлу на запись. Если не указан(или файл не существует), то запись будет отображена в консоль. Необязательный параметр. <br/>

Пример:<br/>
    node index.js --action encode --shift 5<br/>
    node index.js -a decode -s 1 -o C:\outputFile.txt<br/>