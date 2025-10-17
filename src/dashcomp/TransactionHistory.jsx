import { useEffect, useState } from "react";
import Search from "../assets/img/ic_sharp-search.png";
// import DateImg from "../assets/img/icon-park-outline_transaction-order.png";
import FilterImg from "../assets/img/basil_exchange-outline.png";

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    // Fetch data from JSON server
    fetch("http://localhost:8000/transactions")
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Search and filter functionality
  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch =
      transaction.Reference.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.Recipient.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.Status.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDate = selectedDate
      ? new Date(transaction.Date).toDateString() ===
        new Date(selectedDate).toDateString()
      : true;

    const matchesStatus =
      filterStatus === ""
        ? true
        : transaction.Status.toLowerCase() === filterStatus.toLowerCase();

    return matchesSearch && matchesDate && matchesStatus;
  });

  return (
    <div className="flex flex-col items-center gap-8 mt-10 py-10 lg:px-16">
  <h2 className="font-semibold text-2xl text-black text-center lg:mr-[450px]">Transactions</h2>

  {/* Filters Section */}
  <div className="flex flex-col lg:flex-row items-center lg:justify-center w-full gap-6 lg:ml-60">
    {/* Search Input */}
    <div className="flex items-center w-full lg:max-w-xs h-12 bg-gray-300 rounded-lg px-4">
      <input
        type="search"
        placeholder="Search"
        className="flex-grow bg-transparent outline-none text-base"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <img src={Search} alt="Search Icon" className="w-6 h-6 cursor-pointer" />
    </div>

    {/* Date Picker */}
    <div className="flex items-center w-full lg:max-w-xs h-12 bg-gray-300 rounded-lg px-4">
      <input
        type="date"
        className="flex-grow bg-transparent outline-none text-base"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
    </div>

    {/* Status Filter */}
    <div className="flex items-center w-full lg:max-w-fit h-12 bg-gray-300 rounded-lg px-4">
      <select
        className="flex-grow bg-transparent outline-none text-base"
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)}
      >
        <option value="">Filter</option>
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
      </select>
      <img src={FilterImg} alt="Filter Icon" className="w-6 h-6" />
    </div>
  </div>

  {/* Transactions Table */}
  <div className="w-full bg-white rounded-lg shadow-md lg:ml-[260px] max-w-[960px]">
    <div className="flex justify-between px-7 py-4 lg:mr-10 text-gray-700 font-medium text-sm lg:text-base">
      <p>Reference</p>
      <p>Amount Sent</p>
      <p>Rate</p>
      <p>Channel</p>
      <p>Recipient</p>
      <p>Status</p>
    </div>

    {/* Transaction Rows */}
    <div className="space-y-5 mb-16">
    {filteredTransactions.length > 0 ? (
      filteredTransactions.map((transaction) => (
        <div
          key={transaction.Reference}
          className="flex justify-between px-4 py-5 rounded-lg text-gray-700 text-sm lg:text-base bg-gray-200 mr-8 ml-5"
        >
          <p>{transaction.Reference}</p>
          <p>{transaction.AmountSent}</p>
          <p>{transaction.Rate}</p>
          <p>{transaction.Channel}</p>
          <p>{transaction.Recipient}</p>
          <p
            className={`${
              transaction.Status === "Completed"
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {transaction.Status}
          </p>
        </div>
      ))
    ) : (
      <div className="px-6 py-4 text-center text-gray-500">
        No transactions found.
      </div>
    )}
    </div>
  </div>
</div>

  );
};

export default TransactionHistory;