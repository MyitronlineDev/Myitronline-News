const Articles = ({ data }) => {
    return (
        <div className="max-w-4xl mx-auto py-5">
            <div className="bg-green-100 p-4 mb-4 text-xl font-bold">
                Articles
            </div>

            {data.map((item) => (
                <div key={item.id} className="p-4 border-b">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm italic">{item.synopsis}</p>
                </div>
            ))}
        </div>
    );
};

export default Articles;
