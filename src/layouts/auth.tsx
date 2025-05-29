import { Flex, Layout } from "antd";
import type { PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <Layout>
      <Layout.Content className="w-screen h-screen">
        <Flex className="h-full" align="center" justify="center">
          <div className="w-full max-w-sm">{children}</div>
        </Flex>
      </Layout.Content>
    </Layout>
  );
}
