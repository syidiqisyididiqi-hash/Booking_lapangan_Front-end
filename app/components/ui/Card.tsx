type CardProps = {
  children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-100">
      {children}
    </div>
  );
}