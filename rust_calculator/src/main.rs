mod calculator;
use std::env;

fn main() {
    let calculator = calculator::Calculator::new();

    let args: Vec<String> = env::args().collect();

    if args.len() < 4 {
        println!("Please execute any operation, example: 2 + 2");
        return;
    }

    let operand1 = args[1].parse::<f32>().unwrap();
    let operand2 = args[3].parse::<f32>().unwrap();
    let operator = &(*args[2]);

    match operator {
        "+" => {
            println!("{}", calculator.add(&operand1, &operand2));
        }
        "-" => {
            println!("{}", calculator.subtract(&operand1, &operand2));
        }
        "/" => {
            println!("{}", calculator.divide(&operand1, &operand2));
        }
        "*" => {
            println!("{}", calculator.multiply(&operand1, &operand2));
        }
        _ => {
            println!("Operador inválido. Use um dos seguintes: +, -, /, *");
        }
    }
}