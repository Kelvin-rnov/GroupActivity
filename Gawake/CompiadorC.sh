gcc -o compilado *.c
if [ $? -eq 0 ];then 
   echo "(V) Compilado com sucesso!"
   ./compilado
else
   echo "(!) Não compilado"
fi
