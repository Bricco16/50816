// Generated from c:/Users/marti/ssl-antlr-calculator/Lenguaje.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import LenguajeListener from './LenguajeListener.js';
import LenguajeVisitor from './LenguajeVisitor.js';

const serializedATN = [4,1,18,73,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,1,0,
1,0,1,0,5,0,13,8,0,10,0,12,0,16,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,41,8,1,1,2,1,
2,5,2,45,8,2,10,2,12,2,48,9,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,
3,60,8,3,1,3,1,3,1,3,1,3,1,3,1,3,5,3,68,8,3,10,3,12,3,71,9,3,1,3,0,1,6,4,
0,2,4,6,0,2,1,0,9,10,1,0,7,8,78,0,8,1,0,0,0,2,40,1,0,0,0,4,42,1,0,0,0,6,
59,1,0,0,0,8,9,5,1,0,0,9,10,5,16,0,0,10,14,5,14,0,0,11,13,3,2,1,0,12,11,
1,0,0,0,13,16,1,0,0,0,14,12,1,0,0,0,14,15,1,0,0,0,15,17,1,0,0,0,16,14,1,
0,0,0,17,18,5,15,0,0,18,1,1,0,0,0,19,20,5,16,0,0,20,21,5,6,0,0,21,22,3,6,
3,0,22,23,5,11,0,0,23,41,1,0,0,0,24,25,5,2,0,0,25,26,3,4,2,0,26,27,5,3,0,
0,27,28,5,12,0,0,28,29,5,16,0,0,29,30,5,13,0,0,30,31,3,4,2,0,31,32,5,11,
0,0,32,41,1,0,0,0,33,41,3,4,2,0,34,35,5,4,0,0,35,36,5,12,0,0,36,37,3,6,3,
0,37,38,5,13,0,0,38,39,5,11,0,0,39,41,1,0,0,0,40,19,1,0,0,0,40,24,1,0,0,
0,40,33,1,0,0,0,40,34,1,0,0,0,41,3,1,0,0,0,42,46,5,14,0,0,43,45,3,2,1,0,
44,43,1,0,0,0,45,48,1,0,0,0,46,44,1,0,0,0,46,47,1,0,0,0,47,49,1,0,0,0,48,
46,1,0,0,0,49,50,5,15,0,0,50,5,1,0,0,0,51,52,6,3,-1,0,52,60,5,17,0,0,53,
60,5,16,0,0,54,60,5,5,0,0,55,56,5,12,0,0,56,57,3,6,3,0,57,58,5,13,0,0,58,
60,1,0,0,0,59,51,1,0,0,0,59,53,1,0,0,0,59,54,1,0,0,0,59,55,1,0,0,0,60,69,
1,0,0,0,61,62,10,6,0,0,62,63,7,0,0,0,63,68,3,6,3,7,64,65,10,5,0,0,65,66,
7,1,0,0,66,68,3,6,3,6,67,61,1,0,0,0,67,64,1,0,0,0,68,71,1,0,0,0,69,67,1,
0,0,0,69,70,1,0,0,0,70,7,1,0,0,0,71,69,1,0,0,0,6,14,40,46,59,67,69];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LenguajeParser extends antlr4.Parser {

    static grammarFileName = "Lenguaje.g4";
    static literalNames = [ null, "'programa'", "'procesar'", "'manejarError'", 
                            "'imprimir'", null, "'='", "'+'", "'-'", "'*'", 
                            "'/'", "';'", "'('", "')'", "'{'", "'}'" ];
    static symbolicNames = [ null, null, null, null, null, "STRING", "EQ", 
                             "ADD", "SUB", "MUL", "DIV", "SEMI", "LPAREN", 
                             "RPAREN", "LCURLY", "RCURLY", "ID", "INT", 
                             "WS" ];
    static ruleNames = [ "programa", "stat", "bloque", "expr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = LenguajeParser.ruleNames;
        this.literalNames = LenguajeParser.literalNames;
        this.symbolicNames = LenguajeParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 3:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 6);
    		case 1:
    			return this.precpred(this._ctx, 5);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LenguajeParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 8;
	        this.match(LenguajeParser.T__0);
	        this.state = 9;
	        this.match(LenguajeParser.ID);
	        this.state = 10;
	        this.match(LenguajeParser.LCURLY);
	        this.state = 14;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 81940) !== 0)) {
	            this.state = 11;
	            this.stat();
	            this.state = 16;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 17;
	        this.match(LenguajeParser.RCURLY);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stat() {
	    let localctx = new StatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LenguajeParser.RULE_stat);
	    try {
	        this.state = 40;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	            localctx = new AsignacionContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 19;
	            this.match(LenguajeParser.ID);
	            this.state = 20;
	            this.match(LenguajeParser.EQ);
	            this.state = 21;
	            this.expr(0);
	            this.state = 22;
	            this.match(LenguajeParser.SEMI);
	            break;
	        case 2:
	            localctx = new ExcepcionContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 24;
	            this.match(LenguajeParser.T__1);
	            this.state = 25;
	            this.bloque();
	            this.state = 26;
	            this.match(LenguajeParser.T__2);
	            this.state = 27;
	            this.match(LenguajeParser.LPAREN);
	            this.state = 28;
	            this.match(LenguajeParser.ID);
	            this.state = 29;
	            this.match(LenguajeParser.RPAREN);
	            this.state = 30;
	            this.bloque();
	            this.state = 31;
	            this.match(LenguajeParser.SEMI);
	            break;
	        case 14:
	            localctx = new BloqueInstruccionContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 33;
	            this.bloque();
	            break;
	        case 4:
	            localctx = new ImpresionContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 34;
	            this.match(LenguajeParser.T__3);
	            this.state = 35;
	            this.match(LenguajeParser.LPAREN);
	            this.state = 36;
	            this.expr(0);
	            this.state = 37;
	            this.match(LenguajeParser.RPAREN);
	            this.state = 38;
	            this.match(LenguajeParser.SEMI);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bloque() {
	    let localctx = new BloqueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, LenguajeParser.RULE_bloque);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.match(LenguajeParser.LCURLY);
	        this.state = 46;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 81940) !== 0)) {
	            this.state = 43;
	            this.stat();
	            this.state = 48;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 49;
	        this.match(LenguajeParser.RCURLY);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 6;
	    this.enterRecursionRule(localctx, 6, LenguajeParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	            localctx = new NumeroContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 52;
	            this.match(LenguajeParser.INT);
	            break;
	        case 16:
	            localctx = new VariableContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 53;
	            this.match(LenguajeParser.ID);
	            break;
	        case 5:
	            localctx = new TextoContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 54;
	            this.match(LenguajeParser.STRING);
	            break;
	        case 12:
	            localctx = new ParensContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 55;
	            this.match(LenguajeParser.LPAREN);
	            this.state = 56;
	            this.expr(0);
	            this.state = 57;
	            this.match(LenguajeParser.RPAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 69;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 67;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MulDivContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, LenguajeParser.RULE_expr);
	                    this.state = 61;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 62;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===9 || _la===10)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 63;
	                    this.expr(7);
	                    break;

	                case 2:
	                    localctx = new AddSubContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, LenguajeParser.RULE_expr);
	                    this.state = 64;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 65;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===7 || _la===8)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 66;
	                    this.expr(6);
	                    break;

	                } 
	            }
	            this.state = 71;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


}

LenguajeParser.EOF = antlr4.Token.EOF;
LenguajeParser.T__0 = 1;
LenguajeParser.T__1 = 2;
LenguajeParser.T__2 = 3;
LenguajeParser.T__3 = 4;
LenguajeParser.STRING = 5;
LenguajeParser.EQ = 6;
LenguajeParser.ADD = 7;
LenguajeParser.SUB = 8;
LenguajeParser.MUL = 9;
LenguajeParser.DIV = 10;
LenguajeParser.SEMI = 11;
LenguajeParser.LPAREN = 12;
LenguajeParser.RPAREN = 13;
LenguajeParser.LCURLY = 14;
LenguajeParser.RCURLY = 15;
LenguajeParser.ID = 16;
LenguajeParser.INT = 17;
LenguajeParser.WS = 18;

LenguajeParser.RULE_programa = 0;
LenguajeParser.RULE_stat = 1;
LenguajeParser.RULE_bloque = 2;
LenguajeParser.RULE_expr = 3;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_programa;
    }

	ID() {
	    return this.getToken(LenguajeParser.ID, 0);
	};

	LCURLY() {
	    return this.getToken(LenguajeParser.LCURLY, 0);
	};

	RCURLY() {
	    return this.getToken(LenguajeParser.RCURLY, 0);
	};

	stat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatContext);
	    } else {
	        return this.getTypedRuleContext(StatContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_stat;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class AsignacionContext extends StatContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(LenguajeParser.ID, 0);
	};

	EQ() {
	    return this.getToken(LenguajeParser.EQ, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	SEMI() {
	    return this.getToken(LenguajeParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterAsignacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitAsignacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitAsignacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LenguajeParser.AsignacionContext = AsignacionContext;

class ExcepcionContext extends StatContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	bloque = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BloqueContext);
	    } else {
	        return this.getTypedRuleContext(BloqueContext,i);
	    }
	};

	LPAREN() {
	    return this.getToken(LenguajeParser.LPAREN, 0);
	};

	ID() {
	    return this.getToken(LenguajeParser.ID, 0);
	};

	RPAREN() {
	    return this.getToken(LenguajeParser.RPAREN, 0);
	};

	SEMI() {
	    return this.getToken(LenguajeParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterExcepcion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitExcepcion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitExcepcion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LenguajeParser.ExcepcionContext = ExcepcionContext;

class ImpresionContext extends StatContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LPAREN() {
	    return this.getToken(LenguajeParser.LPAREN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	RPAREN() {
	    return this.getToken(LenguajeParser.RPAREN, 0);
	};

	SEMI() {
	    return this.getToken(LenguajeParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterImpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitImpresion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitImpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LenguajeParser.ImpresionContext = ImpresionContext;

class BloqueInstruccionContext extends StatContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	bloque() {
	    return this.getTypedRuleContext(BloqueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterBloqueInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitBloqueInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitBloqueInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LenguajeParser.BloqueInstruccionContext = BloqueInstruccionContext;

class BloqueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_bloque;
    }

	LCURLY() {
	    return this.getToken(LenguajeParser.LCURLY, 0);
	};

	RCURLY() {
	    return this.getToken(LenguajeParser.RCURLY, 0);
	};

	stat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatContext);
	    } else {
	        return this.getTypedRuleContext(StatContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterBloque(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitBloque(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitBloque(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_expr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class TextoContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	STRING() {
	    return this.getToken(LenguajeParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterTexto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitTexto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitTexto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LenguajeParser.TextoContext = TextoContext;

class ParensContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LPAREN() {
	    return this.getToken(LenguajeParser.LPAREN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	RPAREN() {
	    return this.getToken(LenguajeParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterParens(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitParens(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitParens(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LenguajeParser.ParensContext = ParensContext;

class NumeroContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	INT() {
	    return this.getToken(LenguajeParser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LenguajeParser.NumeroContext = NumeroContext;

class MulDivContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	MUL() {
	    return this.getToken(LenguajeParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(LenguajeParser.DIV, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterMulDiv(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitMulDiv(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitMulDiv(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LenguajeParser.MulDivContext = MulDivContext;

class AddSubContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	ADD() {
	    return this.getToken(LenguajeParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(LenguajeParser.SUB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterAddSub(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitAddSub(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitAddSub(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LenguajeParser.AddSubContext = AddSubContext;

class VariableContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(LenguajeParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitVariable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LenguajeParser.VariableContext = VariableContext;


LenguajeParser.ProgramaContext = ProgramaContext; 
LenguajeParser.StatContext = StatContext; 
LenguajeParser.BloqueContext = BloqueContext; 
LenguajeParser.ExprContext = ExprContext; 
