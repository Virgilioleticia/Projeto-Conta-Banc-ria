import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { Conta } from './src/model/Conta';
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";

export function main() {

    let opcao: number;


     // Novas Instâncias da Classe ContaCorrente (Objetos)
     const cc1: ContaCorrente = new ContaCorrente (3, 1234, 1, 'Amanda Magro', 1000000.00, 100000);
     const cc2: ContaCorrente = new ContaCorrente (4, 1234, 1, 'João da Silva', 1000.00, 100.00);
  
     cc1.visualizar();
     cc2.visualizar();
  
     console.log(`\nSaque de R$ 25.000,00 na Conta cc1: ${cc1.sacar(25000.00)}`);
     cc1.visualizar();
    
     console.log(`\nSaque de R$ 1.500,00 na Conta cc2: ${cc2.sacar(1500.00)}`);
  
     console.log(`\Depositar R$ 3.000.99 reais da conta cc2: `);
     cc2.depositar(3000.99)
     cc2.visualizar();

     const cp1: ContaPoupanca = new ContaPoupanca (3, 1234, 2, 'Giovanna da Silva', 20000.00, 10);
     const cp2: ContaPoupanca = new ContaPoupanca (4, 1234, 2, 'Bruno Ferreira', 1000.00, 5);
  
     cp1.visualizar();
     cp2.visualizar();
  
     console.log(`\nSaque de R$ 1.000,00 na Conta cp1: ${cp1.sacar(1000.00)}`);
     cp1.visualizar();
    
     console.log(`\nSaque de R$ 100,00 na Conta cp2: ${cp2.sacar(100.00)}`);
  
     console.log(`\Depositar R$ 300.00 reais da conta cp2: `);
     cp2.depositar(300.00)
     cp2.visualizar();

    while (true) {

        console.log(colors.bg.black, colors.fg.magenta, 
                    "*****************************************************");
        console.log("                                                     ");
        console.log("                BANK LETS GO GENERATION              ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ", 
        colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log(colors.fg.greenstrong, "\nBank Lets Go Generation - O seu Futuro começa aqui!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, "\n\nCriar Conta\n\n", colors.reset);
                
                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong, "\n\nListar todas as Contas\n\n", colors.reset);

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, "\n\nConsultar dados da Conta - por número\n\n", colors.reset);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, "\n\nAtualizar dados da Conta\n\n", colors.reset);

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong, "\n\nApagar uma Conta\n\n", colors.reset);

                keyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong, "\n\nSaque\n\n", colors.reset);

                keyPress()
                break;
            case 7:
                console.log(colors.fg.whitestrong, "\n\nDepósito\n\n", colors.reset);

                keyPress()
                break;
            case 8:
                console.log(colors.fg.whitestrong, "\n\nTransferência entre Contas\n\n", colors.reset);

                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong, "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Letícia Virgilio");
    console.log("Generation Brasil - virgilioleticiao240902@gmail.com");
    console.log("https://github.com/Virgilioleticia");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();

