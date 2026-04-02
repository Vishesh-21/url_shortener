const AuthContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-sm space-y-6">{children}</div>
    </div>
  );
};

export default AuthContainer;
