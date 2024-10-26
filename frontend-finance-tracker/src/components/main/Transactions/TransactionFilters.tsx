import React from 'react';
import {useState} from 'react';

interface TransactionFiltersProps {
    onFilterChange: (filters: FilterCriteria) => void;
    disabled?: boolean;
}

export interface FilterCriteria {
    startDate?: string;
    endDate?: string;
    type?: string;
    category?: string;
    minAmount?: number;
    maxAmount?: number;
}

export const TransactionFilters: React.FC<TransactionFiltersProps> = ({
                                                                          onFilterChange,
                                                                          disabled
                                                                      }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = event.target;
        let filterValue: string | number | undefined = value;

        if (name.includes('Amount') && value) {
            filterValue = parseFloat(value);
        }

        onFilterChange({
            [name]: filterValue || undefined
        } as FilterCriteria);
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">Filters</h3>
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-sm text-indigo-600 hover:text-indigo-800"
                >
                    {isExpanded ? 'Show Less' : 'Show More'}
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Start Date
                    </label>
                    <input
                        type="date"
                        name="startDate"
                        onChange={handleFilterChange}
                        disabled={disabled}
                        className="w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        End Date
                    </label>
                    <input
                        type="date"
                        name="endDate"
                        onChange={handleFilterChange}
                        disabled={disabled}
                        className="w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Type
                    </label>
                    <select
                        name="type"
                        onChange={handleFilterChange}
                        disabled={disabled}
                        className="w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                        <option value="">All</option>
                        <option value="INCOME">Income</option>
                        <option value="EXPENSE">Expense</option>
                    </select>
                </div>

                {isExpanded && (
                    <>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Category
                            </label>
                            <select
                                name="category"
                                onChange={handleFilterChange}
                                disabled={disabled}
                                className="w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            >
                                <option value="">All</option>
                                <option value="Food & Dining">Food & Dining</option>
                                <option value="Shopping">Shopping</option>
                                <option value="Housing">Housing</option>
                                <option value="Transportation">Transportation</option>
                                <option value="Utilities">Utilities</option>
                                <option value="Healthcare">Healthcare</option>
                                <option value="Entertainment">Entertainment</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Min Amount
                            </label>
                            <input
                                type="number"
                                name="minAmount"
                                onChange={handleFilterChange}
                                disabled={disabled}
                                className="w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Max Amount
                            </label>
                            <input
                                type="number"
                                name="maxAmount"
                                onChange={handleFilterChange}
                                disabled={disabled}
                                className="w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};