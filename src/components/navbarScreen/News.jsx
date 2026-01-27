const News = ({ data }) => {

    return (
        <div className="max-w-4xl mx-auto py-5">
            <div className="bg-blue-100 p-4 mb-4 text-xl font-bold">
                News
            </div>

            {data.map((item) => (
                <div key={item.id} className="p-4 border-b">
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-sm">{item.synopsis}</p>
                </div>
            ))}
        </div>
    );
};

export default News;
