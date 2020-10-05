npm install


--action: encode или decode
--shift: число
--input: Путь к файлу на чтение. Если не указан(или файл не существует), то ввод будет из консоли. Необязательный параметр.
--output: Путь к файлу на запись. Если не указан(или файл не существует), то запись будет отображена в консоль. Необязательный параметр.

Пример:
    node index.js --action encode --shift 5
    node index.js -a decode -s 1 -o C:\outputFile.txt