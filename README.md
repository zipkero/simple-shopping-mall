# Simple Shopping Mall

## 1일차

### 환경세팅

```bash
yarn create vite
```

- vite 를 통해 React, Typescript 프로젝트를 생성한다.

```bash
yarn
```

- 패키지들을 설치하고 폴더를 정리한다.

```bash
yarn add vite-plugin-next-react-router react-router-dom
```

- vite는 next와 같이 파일라우팀 시스템이 없어 해당 플러그인을 설치한다.

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { reactRouterPlugin } from "vite-plugin-next-react-router";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactRouterPlugin()],
});
```

- vite.config.ts 에 해당 플러그인을 추가한다.

```typescript
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div>
      <Suspense fallback={`loading...`}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
```

- pages 폴더를 만들고 그안에 \_layout.tsx 를 생성하고 위와 같이 작성한다.
