import React, { useState, useEffect } from "react";
import userService from "../services/userService";
import Spinner from "../components/common/Spinner";
import AlumniDetailModal from "../components/directory/AlumniDetailModal";
import toast from "react-hot-toast";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
  UserGroupIcon,
  AcademicCapIcon,
  BuildingOfficeIcon,
  MapPinIcon,
  FunnelIcon,
} from "@heroicons/react/24/solid";

const API_URL = process.env.REACT_APP_API_URL.replace("/api", "");

export default function AlumniDirectory() {
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);

  // New filtering system
  const [filterType, setFilterType] = useState("name");
  const [searchValue, setSearchValue] = useState("");
  const [filters, setFilters] = useState({
    name: "",
    batchYear: "",
    currentOrganization: "",
    location: "",
  });

  const filterOptions = [
    {
      value: "name",
      label: "Name",
      icon: UserGroupIcon,
      placeholder: "Search by name...",
    },
    {
      value: "batchYear",
      label: "Batch Year",
      icon: AcademicCapIcon,
      placeholder: "e.g., 2020",
    },
    {
      value: "currentOrganization",
      label: "Organization",
      icon: BuildingOfficeIcon,
      placeholder: "Search by company/institute...",
    },
    {
      value: "location",
      label: "Location",
      icon: MapPinIcon,
      placeholder: "Search by location...",
    },
  ];

  const getCurrentFilter = () =>
    filterOptions.find((option) => option.value === filterType);

  const fetchUsers = async (page) => {
    setLoading(true);
    try {
      const activeFilters = {
        page,
        ...Object.fromEntries(
          Object.entries(filters).filter(([_, value]) => value !== "")
        ),
      };
      const res = await userService.getAlumniDirectory(activeFilters);
      setUsers(res.data.data);
      setPagination(res.data.pagination);
    } catch (error) {
      toast.error("Could not fetch alumni.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage, filters]);

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    const newFilters = { ...filters, [filterType]: searchValue };
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setFilters({
      name: "",
      batchYear: "",
      currentOrganization: "",
      location: "",
    });
    setSearchValue("");
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= pagination.totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleFilterTypeChange = (newType) => {
    setFilterType(newType);
    setSearchValue(filters[newType] || "");
  };

  return (
    <div className="min-h-screen bg-black relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex justify-center mb-3 sm:mb-4">
            <div className="bg-white/5 border border-white/10 p-3 sm:p-4 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              <UserGroupIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-2">
            Alumni Directory
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-white/50 font-light max-w-2xl mx-auto px-4">
            Connect with fellow alumni and expand your professional network.
            Search by name, batch year, organization, or location.
          </p>
        </div>

        {/* Enhanced Filter Section */}
        <div className="bg-black border border-white/10 rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.5)] p-4 sm:p-6 mb-6 sm:mb-8 relative overflow-hidden group/filter">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.05),transparent_50%)] group-hover/filter:bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.1),transparent_50%)] transition-colors duration-500 pointer-events-none"></div>

          <div className="flex items-center gap-2 mb-3 sm:mb-4 relative z-10">
            <FunnelIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white/50" />
            <h2 className="text-base sm:text-lg font-medium text-white tracking-tight">
              Search parameters
            </h2>
          </div>

          <form onSubmit={handleFilterSubmit} className="space-y-4 sm:space-y-6">
            {/* First Row: Filter Type and Search Input */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Filter Type Dropdown */}
              <div>
                <label className="block text-sm font-medium text-white/50 mb-2">
                  Query Class
                </label>
                <div className="relative">
                  <select
                    value={filterType}
                    onChange={(e) => handleFilterTypeChange(e.target.value)}
                    className="w-full px-4 py-3 pr-10 border border-white/10 rounded-xl bg-white/5 text-white focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 appearance-none transition-colors text-sm font-medium"
                  >
                    {filterOptions.map((option) => (
                      <option key={option.value} value={option.value} className="bg-black text-white">
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                    <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Search Input */}
              <div>
                <label className="block text-sm font-medium text-white/50 mb-2">
                  Input
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    {React.createElement(getCurrentFilter().icon, {
                      className: "w-5 h-5 text-white/40",
                    })}
                  </div>
                  <input
                    type={filterType === "batchYear" ? "number" : "text"}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder={getCurrentFilter().placeholder}
                    className="w-full pl-10 pr-4 py-3 border border-white/10 rounded-xl bg-white/5 text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-colors text-sm font-light"
                  />
                </div>
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-white/5 border border-white/10 text-white font-medium rounded-xl hover:bg-white/10 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.8)] text-sm transform hover:-translate-y-1 group"
                >
                  <MagnifyingGlassIcon className="w-5 h-5 group-hover:text-primary transition-colors" />
                  <span>Execute Search</span>
                </button>
              </div>
            </div>

            {/* Second Row: Clear Button and Active Filters */}
            <div className="flex items-center justify-between relative z-10">
              <button
                type="button"
                onClick={handleClearFilters}
                className="flex items-center gap-2 px-4 py-2 bg-transparent text-white/50 border border-white/10 font-medium rounded-lg hover:bg-white/5 hover:text-white transition-all duration-200 text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Reset</span>
              </button>

              {/* Active Filters Display */}
              {Object.values(filters).some(value => value !== "") && (
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <span>Active Parameters:</span>
                  {Object.entries(filters).map(([key, value]) =>
                    value && (
                      <span key={key} className="inline-flex items-center gap-1 px-2 py-1 bg-white/5 border border-white/10 text-white rounded-md text-xs">
                        {filterOptions.find(opt => opt.value === key)?.label}: {value}
                      </span>
                    )
                  )}
                </div>
              )}
            </div>
          </form>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {loading ? (
            <div className="flex justify-center py-8 sm:py-12">
              <Spinner className="text-white/50 w-8 h-8" />
            </div>
          ) : users.length > 0 ? (
            <>
              {/* Results Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {users.map((user) => (
                  <div
                    key={user._id}
                    onClick={() => setSelectedUser(user)}
                    className="bg-black border border-white/5 rounded-3xl p-4 sm:p-6 cursor-pointer shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.8)] transition-all duration-300 hover:border-white/10 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.02),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    <div className="text-center relative z-10">
                      <img
                        src={
                          user.profilePicture?.startsWith("http")
                            ? user.profilePicture
                            : user.profilePicture !== "no-photo.jpg"
                              ? `${API_URL}${user.profilePicture}`
                              : `https://ui-avatars.com/api/?name=${user.fullName}&background=222&color=fff&size=128`
                        }
                        alt={user.fullName}
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-3 sm:mb-4 object-cover border-2 border-primary/20 group-hover:border-primary/50 transition-colors"
                      />
                      <h3 className="font-medium text-white tracking-tight text-sm sm:text-base mb-1 truncate">
                        {user.fullName}
                      </h3>
                      <p className="text-white/50 text-xs sm:text-sm font-light mb-2">
                        Class of {user.batchYear}
                      </p>
                      {user.currentOrganization && (
                        <p className="text-primary text-xs sm:text-sm font-medium truncate mb-1">
                          {user.currentOrganization}
                        </p>
                      )}
                      {user.location && (
                        <p className="text-white/30 text-xs font-light truncate">
                          📍 {user.location}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {pagination.totalPages > 1 && (
                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                  <div className="text-sm font-light text-white/50">
                    Showing segment {pagination.currentPage} of {pagination.totalPages}
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handlePageChange(pagination.currentPage - 1)}
                      disabled={pagination.currentPage <= 1}
                      className="p-2 sm:px-3 sm:py-2 text-sm font-medium text-white/70 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <ChevronLeftIcon className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handlePageChange(pagination.currentPage + 1)}
                      disabled={pagination.currentPage >= pagination.totalPages}
                      className="p-2 sm:px-3 sm:py-2 text-sm font-medium text-white/70 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <ChevronRightIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16 sm:py-20 bg-black border border-white/5 rounded-3xl shadow-premium">
              <div className="text-4xl sm:text-6xl mb-4 opacity-30">🔍</div>
              <h3 className="text-lg sm:text-xl font-medium text-white mb-2 tracking-tight">
                Entity Not Found
              </h3>
              <p className="text-white/40 font-light text-sm sm:text-base">
                No profiles match the provided parameters.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Alumni Detail Modal */}
      {selectedUser && (
        <AlumniDetailModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </div>
  );
}
