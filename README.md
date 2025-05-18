# 📘 Proyecto "Intérprete del Lenguaje Personalizado"

---

Este proyecto es un **analizador léxico, sintáctico e intérprete** para un lenguaje personalizado que incluye estructuras como:

- Asignaciones
- Bloques `procesar` con `manejarError`
- Expresiones con variables, números y cadenas
- Instrucciones como `imprimir`

Está desarrollado en **JavaScript** utilizando **ANTLR4**, y permite traducir instrucciones escritas en este lenguaje a **JavaScript** y ejecutarlas.

---

## 🧠 ¿Qué hace el intérprete?

✅ Verifica errores léxicos y sintácticos.  
⚠️ Muestra advertencias si encuentra errores ortográficos cercanos en identificadores o palabras clave.  
🌳 Imprime el árbol de derivación.  
📝 Genera código equivalente en JavaScript.  
▶️ Ejecuta el código traducido directamente desde consola.

---

## ⚙️ Requisitos

Antes de ejecutar el proyecto, asegurate de tener instalado:

- [Node.js](https://nodejs.org/)
- [Java (JDK)](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [ANTLR4](https://github.com/antlr/antlr4)
- Extensión **ANTLR4 Grammar Syntax Support** en Visual Studio Code (opcional pero recomendable)

---

## 📥 ¿Cómo preparar el proyecto?

1. Cloná este repositorio de GitHub (asegurate de que sea público y su nombre coincida con tu legajo).
2. Abrí una terminal en la carpeta del proyecto. En VS Code: `Terminal > New Terminal` o atajo `Ctrl + ñ`.
3. Instalá las dependencias con:

```bash
npm install