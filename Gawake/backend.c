#include <stdio.h>
#include <stdlib.h>

/* 
    Estrutura da array:
    ____________________________________________________________________
    |   Nome da regra   |   Dias(7)    |   Horário    |    Comando     |

 */

int main(void){
    char rules[99][9][99] = {"1234567891", "1234567891", "1234567891", "1234567891", "1234567891", "1234567891", "1234567891", "1234567891", "1234567891"};
    int i;
    int j;

    //for(i = 0; i < 1; i++){
        for(j = 0; j < 10; j++){
            printf("O valor da coluna [%d] é %c\n", j, rules[j]);
        }
    //}
}