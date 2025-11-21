
export default function App02Page() {
    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="mb-6">
                <h1 className="text-4xl font-bold text-gray-800">오늘의 맛집 추천</h1>
                <div className="mt-2 text-gray-500">여기에 추천목록 표시</div>
            </div>
            <div className="max-w-2xl bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out border border-gray-200">
                <div className="p-6">
                    <h2 className="text-3xl font-bold text-gray-900">맛있는 파스타 집</h2>
                    <p className="mt-2 font-semibold text-indigo-600">방금 추천받은 맛집!</p>
                </div>
            </div>
        </div>
    );
}