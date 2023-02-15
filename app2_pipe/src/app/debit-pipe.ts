
import {PipeTransform,Pipe} from '@angular/core'

@Pipe({
    name:'mydebit'
})
export class DebitPipe implements PipeTransform
{
    transform(value: any) {
        let debitCardNumber:string = value+'';

        let formattedDebitCardNumber:string = '';

        formattedDebitCardNumber = debitCardNumber.slice(0,3)+'-'+
                                   debitCardNumber.slice(3,6)+'-'+
                                   debitCardNumber.slice(6,9);
                                          
        console.log('pipe method '+formattedDebitCardNumber);
        return formattedDebitCardNumber;

    }
}
