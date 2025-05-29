import AuthLayout from "@/layouts/auth";
import { sleep } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Button, Divider, Form, Input, Typography } from "antd";

export const Route = createFileRoute("/_auth/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const mutation = useMutation({
    mutationFn: async (values: any) => {
      await sleep(2000);
      console.log(values);
    },
  });

  return (
    <AuthLayout>
      <Typography.Title level={3}>Login</Typography.Title>
      <Form layout="vertical" onFinish={mutation.mutate} size="large">
        <Form.Item name="username" rules={[{ required: true }]}>
          <Input placeholder="Enter username" />
        </Form.Item>

        <Form.Item name="password" rules={[{ required: true }]}>
          <Input.Password placeholder="Enter password" />
        </Form.Item>

        <Button
          loading={mutation.isPending}
          type="primary"
          htmlType="submit"
          className="w-full"
        >
          Login
        </Button>
      </Form>
      <Divider />

      <Link to="/forgot-password">Forgot password?</Link>
    </AuthLayout>
  );
}
