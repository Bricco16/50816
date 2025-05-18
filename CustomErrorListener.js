import antlr4 from 'antlr4';

class CustomErrorListener extends antlr4.error.ErrorListener {
  constructor() {
    super();
    this.errors = [];
  }

  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    this.errors.push(`Línea ${line}, columna ${column}: ${msg}`);
  }

  hasErrors() {
    return this.errors.length > 0;
  }

  getErrors() {
    return this.errors;
  }
}

export default CustomErrorListener;
