# 🧠 API REST de Datos Aleatorios (`facts`)

API RESTful en **TypeScript** con **Express**, modular y con tests usando **Jest + Supertest**.

---

## 🚀 Características

- API REST en TypeScript
- Rutas separadas por módulos
- Controladores desacoplados
- Datos en memoria (fácil de migrar a DB)
- Testing completo con Jest
- Validación básica de input

---

## 📦 Requisitos

- Node.js >= 18
- npm

---

## ⚙️ Instalación

### 1. Instalación de proyecto
```bash
git clone https://github.com/dewstouh/api-rest-example.git
cd api-rest-example
npm install
```

### 2. Configuración
Renombra el archivo `.env.example` a `.env` y configura el puerto de la API
```
PORT=3000
```

---

## 📁 Estructura

```
src/
├── app.ts       
├── index.ts     
├── data/        
├── routes/      
├── controllers/ 
tests/
└── facts.test.ts
```

---

## 👉 Ejecución

### Iniciar en modo de desarrollo (hotreload)

```bash
npm run dev
```

### Testear endpoints:

```bash
npm run test
```

---

## 👉 Endpoints

### Obtener todos los facts

```http
GET /api/facts
```

### Obtener un fact aleatorio

```http
GET /api/facts/random
```

### Añadir un nuevo fact

```http
POST /api/facts/add
Content-Type: application/json

{
  "fact": "Los cuervos recuerdan caras humanas."
}
```

---

## ✅ Tests incluidos

* `GET /api/facts`
* `POST /api/facts/add`
* Validación de entrada: errores si falta el fact

---

## 📌 TODO

* Base de datos (MongoDB)
* Separar lógica de servicio
* Documentación con Swagger
* Implementación en un bot de Discord

---


Diego Rodríguez
[elmundodeniby.com](https://elmundodeniby.com)

---
