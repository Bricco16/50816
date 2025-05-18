grammar Lenguaje;

// ----------- Gramática -----------
programa: 'programa' ID LCURLY stat* RCURLY;

stat
    : ID EQ expr SEMI                                                       #asignacion
    | 'procesar' bloque 'manejarError' LPAREN ID RPAREN bloque SEMI         #excepcion
    | bloque                                                                #bloqueInstruccion
    | 'imprimir' LPAREN expr RPAREN SEMI                                    #impresion
    ;

bloque
    : LCURLY stat* RCURLY
    ;

expr
    : expr op=(MUL | DIV) expr    #MulDiv
    | expr op=(ADD | SUB) expr    #AddSub
    | INT                         #numero
    | ID                          #variable
    | STRING                      #texto                    
    | LPAREN expr RPAREN          #parens
    ;


STRING : '"' (~["\\] | '\\' .)* '"';

// ----------- Lexemas -----------
EQ     : '=';
ADD    : '+';
SUB    : '-';
MUL    : '*';
DIV    : '/';
SEMI   : ';';
LPAREN : '(';
RPAREN : ')';
LCURLY : '{';
RCURLY : '}';

ID     : [a-zA-Z] [a-zA-Z0-9_]*;
INT    : [0-9]+ ('.' [0-9]+)?;
WS     : [ \t\r\n]+ -> skip;
