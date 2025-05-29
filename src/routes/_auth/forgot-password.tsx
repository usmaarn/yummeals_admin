import AuthLayout from "@/layouts/auth";
import { sleep } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Button, Divider, Form, Input, Typography } from "antd";

export const Route = createFileRoute("/_auth/forgot-password")({
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
      <Typography.Title level={3}>Forgot Password</Typography.Title>
      <Form layout="vertical" onFinish={mutation.mutate} size="large">
        <Form.Item name="email" rules={[{ required: true, type: "email" }]}>
          <Input placeholder="Enter email address" />
        </Form.Item>

        <Button
          loading={mutation.isPending}
          type="primary"
          htmlType="submit"
          className="w-full"
        >
          Sent Reset Link
        </Button>
      </Form>
      <Divider />
      <Typography.Paragraph>
        <span>Remembered your password? </span>
        <Link to="/login">Login</Link>
      </Typography.Paragraph>
    </AuthLayout>
  );
}
