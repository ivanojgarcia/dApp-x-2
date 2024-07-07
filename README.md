# Blockchain Project dApp-x-2

Este proyecto consta de dos repositorios principales que trabajan en conjunto para proporcionar una solución blockchain completa:

1. `hero-smart-contract`: Desarrollo y despliegue de Smart Contracts
2. `hero-web3-service`: Backend for Frontend (BFF) para interacción con Smart Contracts

## Repositorios

### 1. hero-smart-contract

Este repositorio contiene toda la lógica y control del desarrollo y despliegue de los smart contracts.

**Tecnologías principales:**
- TypeScript
- Hardhat

**Características:**
- Desarrollo de smart contracts en Solidity
- Scripts de despliegue automatizados
- Pruebas unitarias y de integración para los contratos
- Configuración de redes (testnet, mainnet)

**Instalación y uso:**
```bash
git clone https://github.com/your-username/hero-smart-contract.git
cd hero-smart-contract
npm install
npx hardhat compile
npx hardhat test
npx hardhat run scripts/deploy.ts --network <network-name>
```

### 2. hero-web3-service

Este repositorio contiene el Backend for Frontend (BFF) y controla las capas de interacción con los smart contracts desplegados.

**Tecnologías principales:**
- NestJS
- TypeScript
- ethers.js

**Características:**
- API RESTful para interactuar con los smart contracts
- Servicios para leer y escribir en la blockchain
- Manejo de wallets y firmas de transacciones
- Capa de abstracción para simplificar las operaciones blockchain

**Estructura del proyecto:**
```
src/
├── core/
│   ├── artifacts/contracts/
│   │   └── XdAppManagement.json
│   ├── types/
│   ├── constants/
│   │   └── smartcontract.constant.ts
│   ├── interfaces/
│   │   └── core.interface.ts
│   ├── core.controller.ts
│   ├── core.module.ts
│   └── core.service.ts
├── libs/
│   └── validator/
│       ├── abi-object.lib.ts
│       └── ethers.provider.ts
├── posts/
│   ├── dto/
│   │   ├── create-post.dto.ts
│   │   ├── header-user-address.dto.ts
│   │   ├── header-validation.decorator.ts
│   │   └── update-post.dto.ts
│   ├── mappers/
│   ├── types/interfaces/
│   ├── utils/
│   ├── posts.controller.ts
│   ├── posts.module.ts
│   └── posts.service.ts
├── users/
│   ├── dto/
│   │   └── user-create.dto.ts
│   ├── types/
│   ├── users.controller.ts
│   ├── users.module.ts
│   └── users.service.ts
├── app.controller.spec.ts
├── app.controller.ts
├── app.module.ts
├── app.service.ts
└── main.ts
```

**Instalación y uso:**
```bash
git clone https://github.com/your-username/hero-web3-service.git
cd hero-web3-service
npm install
npm run start:dev
```

## Arquitectura del Proyecto

```
Hero Blockchain Project
│
├── hero-smart-contract
│   ├── contracts/
│   ├── scripts/
│   ├── test/
│   └── hardhat.config.ts
│
└── hero-web3-service
    └── src/
        ├── core/
        ├── libs/
        ├── posts/
        ├── users/
        └── app.module.ts
```

## Flujo de Trabajo

1. Los smart contracts se desarrollan y prueban en `hero-smart-contract`.
2. Una vez probados, los contratos se despliegan a la red deseada usando Hardhat.
3. La dirección del contrato desplegado y el ABI se configuran en `hero-web3-service` (en `core/artifacts/contracts/XdAppManagement.json` y `core/constants/smartcontract.constant.ts`).
4. `hero-web3-service` proporciona endpoints API a través de los controladores en `core`, `posts`, y `users` para que las aplicaciones cliente interactúen con los smart contracts.

## Configuración

Asegúrate de configurar las siguientes variables de entorno en `hero-web3-service`. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
PORT=3000
CONTRACT_NAME=XdAppManagement
USER_ADDRESS_ACCOUNT_TEST=
PRIVATE_KEY=
MAINNET_URL=https://eth-sepolia.g.alchemy.com/v2
ALCHEMY_API_KEY=
SMARTCONTRACT_ADDRESS=
```

Descripción de las variables:

- `PORT`: Puerto en el que se ejecutará el servicio (por defecto 3000)
- `CONTRACT_NAME`: Nombre del contrato inteligente principal
- `USER_ADDRESS_ACCOUNT_TEST`: Dirección de la cuenta de usuario para pruebas
- `PRIVATE_KEY`: Clave privada para firmar transacciones (¡mantén esto seguro!)
- `MAINNET_URL`: URL base de la red Ethereum (en este caso, Sepolia testnet)
- `ALCHEMY_API_KEY`: Tu clave API de Alchemy para acceder a los nodos de Ethereum
- `SMARTCONTRACT_ADDRESS`: Dirección del smart contract desplegado

Asegúrate de no compartir tu archivo `.env` y de incluirlo en el `.gitignore` para mantener seguras tus claves privadas y API keys.

## Desarrollo

1. Realiza cambios en los smart contracts en `hero-smart-contract`.
2. Prueba los cambios usando Hardhat.
3. Despliega los contratos actualizados.
4. Actualiza el ABI en `hero-web3-service/src/core/artifacts/contracts/XdAppManagement.json` si es necesario.
5. Actualiza la variable `SMARTCONTRACT_ADDRESS` en el archivo `.env` con la nueva dirección del contrato desplegado.
6. Desarrolla o actualiza los endpoints API en los controladores correspondientes (`core.controller.ts`, `posts.controller.ts`, `users.controller.ts`) para interactuar con los nuevos métodos del contrato.

## Pruebas

- Para `hero-smart-contract`:
  ```bash
  npx hardhat test
  ```

- Para `hero-web3-service`:
  ```bash
  npm run test
  ```

## Contribución

Si deseas contribuir a este proyecto, por favor crea un Pull Request en el repositorio correspondiente con tus cambios propuestos.

## Licencia

[MIT](https://choosealicense.com/licenses/mit/)