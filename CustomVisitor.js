import LenguajeParser from "./generated/LenguajeParser.js";

class CustomVisitor {
  constructor(traducir = false) {
    this.traducir = traducir; // si es true, genera JS, si no solo recorre
    this.jsCode = "";
  }

  generateJS(tree) {
    this.jsCode = this.visit(tree);
    return this.jsCode;
  }

  visit(ctx) {
    if (!ctx) return "";

    // Nombre de la regla sin "Context"
    const ruleName = ctx.constructor.name.replace("Context", "");
    const method = this[`visit${ruleName}`];
    if (method) {
      return method.call(this, ctx);
    } else {
      // Por defecto recorre hijos y concatena
      let result = "";
      for (let i = 0; i < ctx.getChildCount(); i++) {
        result += this.visit(ctx.getChild(i));
      }
      return result;
    }
  }

  // Programa: programa ID { stat* }
  visitPrograma(ctx) {
    let instruccionesJS = "";
    for (let i = 0; i < ctx.stat().length; i++) {
      instruccionesJS += this.visit(ctx.stat(i));
    }
    return instruccionesJS;
  }

  // stat: asignacion | excepcion | bloque | impresion
  visitStat(ctx) {
    if (ctx.asignacion()) return this.visit(ctx.asignacion());
    if (ctx.excepcion()) return this.visit(ctx.excepcion());
    if (ctx.bloque()) return this.visit(ctx.bloque());
    if (ctx.impresion()) return this.visit(ctx.impresion());
    return "";
  }

  // asignacion: ID EQ expr SEMI
visitAsignacion(ctx) {
  const id = ctx.ID().getText();
  const expr = this.visit(ctx.expr());
  return `let ${id} = ${expr};\n`;
}

  // excepcion: 'procesar' bloque 'manejarError' LPAREN ID RPAREN bloque SEMI
  visitExcepcion(ctx) {
    const bloqueTry = this.visit(ctx.bloque(0));
    const idError = ctx.ID().getText();
    const bloqueCatch = this.visit(ctx.bloque(1));
    return `try ${bloqueTry} catch (${idError}) ${bloqueCatch}\n`;
  }

  // bloque: { stat* }
  visitBloque(ctx) {
    let body = "";
    for (let i = 0; i < ctx.stat().length; i++) {
      body += this.visit(ctx.stat(i));
    }
    return `{\n${body}}\n`;
  }

  // impresion: imprimir ( expr ) ;
  visitImpresion(ctx) {
    const expr = this.visit(ctx.expr());
    return `console.log(${expr});\n`;
  }

  // expr: reglas para expresión (expr + - * /, INT, ID, STRING, parens)
  visitMulDiv(ctx) {
    const left = this.visit(ctx.expr(0));
    const right = this.visit(ctx.expr(1));
    const op = ctx.op.text;
    return `(${left} ${op} ${right})`;
  }

  visitAddSub(ctx) {
    const left = this.visit(ctx.expr(0));
    const right = this.visit(ctx.expr(1));
    const op = ctx.op.text;
    return `(${left} ${op} ${right})`;
  }

  visitNumero(ctx) {
    return ctx.INT().getText();
  }

  visitVariable(ctx) {
    return ctx.ID().getText();
  }

  visitTexto(ctx) {
    return ctx.STRING().getText();
  }

  visitParens(ctx) {
    return `(${this.visit(ctx.expr())})`;
  }
}

export default CustomVisitor;
