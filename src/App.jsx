// Extract React hooks from global scope (loaded via CDN)
const { useState, useMemo } = React;

// SVG Icons Component Definitions (to avoid loading font libraries)
const Icons = {
  MapPin: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
  ),
  Bed: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><circle cx="6" cy="12" r="2"/></svg>
  ),
  Bath: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 4v16"/><rect width="18" height="12" x="3" y="8" rx="2"/><path d="M12 5a3 3 0 1 0-6 0v3h6Z"/></svg>
  ),
  Maximize: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/></svg>
  ),
  Search: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
  ),
  Calendar: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
  ),
  User: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
  ),
  Check: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
  ),
  Filter: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
  ),
  Home: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
  )
};

// Main App Component
function App() {
  const allProperties = window.propertiesData || [];

  // State Variables
  const [activeTab, setActiveTab] = useState("Rent"); // "Rent" or "Buy"
  const [searchKeyword, setSearchKeyword] = useState("");
  const [tempKeyword, setTempKeyword] = useState(""); // For input text before search submit
  const [minBudget, setMinBudget] = useState("");
  const [maxBudget, setMaxBudget] = useState("");
  const [selectedBhk, setSelectedBhk] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [sortOption, setSortOption] = useState("default");
  const [selectedProperty, setSelectedProperty] = useState(null);
  
  // Inquiry submission status for specific property id
  const [inquiryStatus, setInquiryStatus] = useState({ submitted: false, name: "" });

  // Dynamic Budget Dropdown Option Ranges
  const budgetOptions = useMemo(() => {
    if (activeTab === "Rent") {
      return {
        min: [
          { value: "0", label: "₹0" },
          { value: "10000", label: "₹10,000" },
          { value: "15000", label: "₹15,000" },
          { value: "20000", label: "₹20,000" },
          { value: "25000", label: "₹25,000" }
        ],
        max: [
          { value: "9999999", label: "Any Max" },
          { value: "15000", label: "₹15,000" },
          { value: "20000", label: "₹20,000" },
          { value: "25000", label: "₹25,000" },
          { value: "35000", label: "₹35,000" },
          { value: "50000", label: "₹50,000" }
        ]
      };
    } else {
      // Buy
      return {
        min: [
          { value: "0", label: "₹0" },
          { value: "3000000", label: "₹30 Lakhs" },
          { value: "5000000", label: "₹50 Lakhs" },
          { value: "8000000", label: "₹80 Lakhs" },
          { value: "10000000", label: "₹1 Crore" },
          { value: "15000000", label: "₹1.5 Crores" }
        ],
        max: [
          { value: "999999999", label: "Any Max" },
          { value: "5000000", label: "₹50 Lakhs" },
          { value: "8000000", label: "₹80 Lakhs" },
          { value: "10000000", label: "₹1 Crore" },
          { value: "15000000", label: "₹1.5 Crores" },
          { value: "20000000", label: "₹2 Crores" },
          { value: "30000000", label: "₹3 Crores" }
        ]
      };
    }
  }, [activeTab]);

  // Handle Tab Switch
  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
    setMinBudget("");
    setMaxBudget("");
    // Clear filters on tab switch to prevent weird budget overlap
  };

  // Submit Search form
  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    setSearchKeyword(tempKeyword);
  };

  // Reset Filters
  const handleResetFilters = () => {
    setSearchKeyword("");
    setTempKeyword("");
    setMinBudget("");
    setMaxBudget("");
    setSelectedBhk(null);
    setSelectedType(null);
    setSortOption("default");
  };

  // Filtered Properties Computation
  const filteredProperties = useMemo(() => {
    let result = allProperties.filter((property) => {
      // 1. Tab Rent vs Buy Filter
      if (property.purpose !== activeTab) return false;

      // 2. Keyword Filter
      if (searchKeyword.trim() !== "") {
        const query = searchKeyword.toLowerCase();
        const matchesKeyword =
          property.title.toLowerCase().includes(query) ||
          property.location.toLowerCase().includes(query) ||
          property.address.toLowerCase().includes(query) ||
          property.type.toLowerCase().includes(query) ||
          property.description.toLowerCase().includes(query);
        if (!matchesKeyword) return false;
      }

      // 3. Min Budget
      if (minBudget !== "" && minBudget !== "0") {
        if (property.price < parseInt(minBudget, 10)) return false;
      }

      // 4. Max Budget
      if (maxBudget !== "" && maxBudget !== "9999999" && maxBudget !== "999999999") {
        if (property.price > parseInt(maxBudget, 10)) return false;
      }

      // 5. BHK
      if (selectedBhk !== null) {
        if (property.bhk !== selectedBhk) return false;
      }

      // 6. Type
      if (selectedType !== null) {
        if (property.type !== selectedType) return false;
      }

      return true;
    });

    // Apply Sorting
    if (sortOption === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === "size-large") {
      result.sort((a, b) => {
        const sizeA = parseInt(a.area.replace(/,/g, ""), 10);
        const sizeB = parseInt(b.area.replace(/,/g, ""), 10);
        return sizeB - sizeA;
      });
    }

    return result;
  }, [allProperties, activeTab, searchKeyword, minBudget, maxBudget, selectedBhk, selectedType, sortOption]);

  // Handle inquiry submit
  const handleInquirySubmit = (e, propertyId) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const clientName = data.get("clientName");
    setInquiryStatus({ submitted: true, name: clientName });
  };

  const handleOpenModal = (property) => {
    setSelectedProperty(property);
    setInquiryStatus({ submitted: false, name: "" }); // Reset success panel
  };

  const handleCloseModal = () => {
    setSelectedProperty(null);
  };

  return (
    <div className="app-container">
      {/* Navigation Header */}
      <nav className="navbar">
        <a href="#" className="nav-brand" onClick={(e) => { e.preventDefault(); handleResetFilters(); }}>
          <div className="nav-brand-icon">
            <Icons.Home />
          </div>
          MagicBricks<span>Bhubaneswar</span>
        </a>
        <ul className="nav-links">
          <li><a href="#" className={`nav-link ${activeTab === 'Buy' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleTabSwitch('Buy'); }}>Buy</a></li>
          <li><a href="#" className={`nav-link ${activeTab === 'Rent' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleTabSwitch('Rent'); }}>Rent</a></li>
          <li><a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); alert("Feature coming soon! Explore our Bhubaneswar listings below."); }}>Agents</a></li>
          <li><a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); alert("Bhubaneswar Property Guide: Patia, Nayapalli, and Jayadev Vihar are hot zones."); }}>Bhubaneswar Guide</a></li>
        </ul>
        <div className="nav-actions">
          <a href="#" className="btn-contact" onClick={(e) => { e.preventDefault(); alert("Contact us at support@magicbricks-bbsr.com or +91 674 1234567"); }}>Contact Support</a>
          <a href="#" className="btn-post-property" onClick={(e) => { e.preventDefault(); alert("Owner dashboard coming soon! Keep your Bhubaneswar properties ready."); }}>Post Property <span style={{fontSize: '0.75rem', verticalAlign: 'middle'}}>FREE</span></a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <div className="hero-subtitle">10 Curated Bhubaneswar Properties</div>
          <h1 className="hero-title">Find Your Perfect Home in temple city Bhubaneswar</h1>
          <p className="hero-desc">Explore rental flats, luxury villas, studio apartments, and independent houses across prime locations like Patia, Nayapalli, and Jayadev Vihar.</p>
          
          {/* Main Search Panel */}
          <div className="search-container">
            <div className="search-tabs">
              <button 
                className={`search-tab ${activeTab === "Rent" ? "active" : ""}`}
                onClick={() => handleTabSwitch("Rent")}
              >
                Rent Properties
              </button>
              <button 
                className={`search-tab ${activeTab === "Buy" ? "active" : ""}`}
                onClick={() => handleTabSwitch("Buy")}
              >
                Buy Properties
              </button>
            </div>
            
            <form onSubmit={handleSearchSubmit} className="search-form-grid">
              <div className="form-group">
                <label>Locality / Keyword</label>
                <div className="input-with-icon">
                  <span className="input-icon"><Icons.Search /></span>
                  <input 
                    type="text" 
                    placeholder="Try 'Patia', 'Nayapalli', 'Villa', '3 BHK'..."
                    className="form-input"
                    value={tempKeyword}
                    onChange={(e) => setTempKeyword(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Min Budget</label>
                <select 
                  className="form-select"
                  value={minBudget}
                  onChange={(e) => setMinBudget(e.target.value)}
                >
                  <option value="">Min Price</option>
                  {budgetOptions.min.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Max Budget</label>
                <select 
                  className="form-select"
                  value={maxBudget}
                  onChange={(e) => setMaxBudget(e.target.value)}
                >
                  <option value="">Max Price</option>
                  {budgetOptions.max.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              <button type="submit" className="btn-search">
                <Icons.Search /> Search
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* Main Grid View */}
      <main className="main-content">
        {/* Filters Panel */}
        <section className="filter-section">
          <div className="filter-title">
            <Icons.Filter /> Filters
          </div>

          {/* Property Type Filter */}
          <div className="filter-group">
            <span className="filter-label">Property Type:</span>
            <div className="filter-options">
              {["Flat", "Villa", "Independent House", "Studio"].map((type) => (
                <button
                  key={type}
                  className={`filter-btn ${selectedType === type ? "active" : ""}`}
                  onClick={() => setSelectedType(selectedType === type ? null : type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* BHK size Filter */}
          <div className="filter-group">
            <span className="filter-label">BHK Configuration:</span>
            <div className="filter-options">
              {[1, 2, 3, 4].map((bhk) => (
                <button
                  key={bhk}
                  className={`filter-btn ${selectedBhk === bhk ? "active" : ""}`}
                  onClick={() => setSelectedBhk(selectedBhk === bhk ? null : bhk)}
                >
                  {bhk} BHK
                </button>
              ))}
            </div>
          </div>

          {/* Clear Button */}
          {(searchKeyword || minBudget || maxBudget || selectedBhk || selectedType || sortOption !== "default") && (
            <button className="btn-clear-filters" onClick={handleResetFilters}>
              Clear All Filters ×
            </button>
          )}
        </section>

        {/* Results Metadata Header */}
        <section className="results-header">
          <div className="results-count">
            Found <span>{filteredProperties.length}</span> properties for {activeTab === "Rent" ? "Rent" : "Sale"} in Bhubaneswar
          </div>
          
          <div className="results-sorting">
            Sort By:
            <select 
              className="sort-select"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="default">Featured Listings</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="size-large">Area: Largest First</option>
            </select>
          </div>
        </section>

        {/* Properties Grid Container */}
        <section className="property-grid">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <article key={property.id} className="property-card">
                <div className="card-img-container">
                  <img src={property.image} alt={property.title} className="card-img" />
                  <span className={`card-badge ${property.purpose.toLowerCase()}`}>
                    For {property.purpose}
                  </span>
                  <span className="card-type-badge">{property.type}</span>
                </div>

                <div className="card-content">
                  <div className="card-price">{property.priceString}</div>
                  <h3 className="card-title" title={property.title}>{property.title}</h3>
                  <div className="card-location">
                    <Icons.MapPin /> {property.location}, Bhubaneswar
                  </div>

                  <div className="card-specs">
                    <div className="spec-item">
                      <span className="spec-label">Beds</span>
                      <span className="spec-value">{property.bhk} BHK</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Baths</span>
                      <span className="spec-value">{property.bathrooms}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Area</span>
                      <span className="spec-value">{property.area}</span>
                    </div>
                  </div>

                  <div className="card-footer">
                    <span className="posted-date">Posted {property.postedDate}</span>
                    <button 
                      className="btn-view-details"
                      onClick={() => handleOpenModal(property)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="empty-state">
              <div className="empty-icon"><Icons.Home /></div>
              <h3 className="empty-title">No Properties Match Your Search</h3>
              <p className="empty-desc">Try clearing your filters or resetting the search budget to see all Bhubaneswar properties.</p>
              <button className="btn-reset-search" onClick={handleResetFilters}>
                Reset Search Filters
              </button>
            </div>
          )}
        </section>
      </main>

      {/* Property Details Modal Overlay */}
      {selectedProperty && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={handleCloseModal} aria-label="Close Modal">×</button>
            
            <img src={selectedProperty.image} alt={selectedProperty.title} className="modal-hero-img" />
            
            <div className="modal-body">
              <div className="modal-header-section">
                <div className="modal-title-area">
                  <span className={`modal-purpose-tag ${selectedProperty.purpose.toLowerCase()}`}>
                    For {selectedProperty.purpose}
                  </span>
                  <h2 className="modal-title">{selectedProperty.title}</h2>
                  <div className="card-location" style={{marginTop: '0.5rem', fontSize: '1rem'}}>
                    <Icons.MapPin /> {selectedProperty.address}
                  </div>
                </div>
                <div className="modal-price-area">
                  <div className="modal-price">{selectedProperty.priceString}</div>
                  <div className="modal-unit">{selectedProperty.purpose === 'Rent' ? 'inclusive of maintenance' : 'all inclusive price'}</div>
                </div>
              </div>

              <div className="modal-specs-strip">
                <div className="modal-spec-pill">
                  <Icons.Bed /> {selectedProperty.bhk} BHK Configuration
                </div>
                <div className="modal-spec-pill">
                  <Icons.Bath /> {selectedProperty.bathrooms} Bathrooms
                </div>
                <div className="modal-spec-pill">
                  <Icons.Maximize /> {selectedProperty.area} Total Carpet Area
                </div>
                <div className="modal-spec-pill">
                  <Icons.Calendar /> {selectedProperty.furnishing}
                </div>
              </div>

              <div className="modal-grid-layout">
                {/* Details Left Panel */}
                <div className="modal-left">
                  <h3>Property Description</h3>
                  <p className="modal-desc-text">{selectedProperty.description}</p>

                  <h3>Amenities & Features</h3>
                  <ul className="amenities-list">
                    {selectedProperty.amenities.map((amenity, index) => (
                      <li key={index} className="amenity-item">
                        <Icons.Check /> {amenity}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Seller & Form Right Panel */}
                <div className="modal-right">
                  <div className="agent-card">
                    <div className="agent-info">
                      <div className="agent-avatar">
                        {selectedProperty.postedBy.substring(0, 2).toUpperCase()}
                      </div>
                      <div className="agent-details">
                        <h4>{selectedProperty.postedBy}</h4>
                        <p>Verified Lister in Bhubaneswar</p>
                      </div>
                    </div>

                    {!inquiryStatus.submitted ? (
                      <form 
                        className="inquiry-form"
                        onSubmit={(e) => handleInquirySubmit(e, selectedProperty.id)}
                      >
                        <h4>Contact Seller</h4>
                        <div className="inquiry-fields">
                          <input 
                            type="text" 
                            name="clientName" 
                            placeholder="Your Name" 
                            className="inquiry-input" 
                            required 
                          />
                          <input 
                            type="email" 
                            name="clientEmail" 
                            placeholder="Email Address" 
                            className="inquiry-input" 
                            required 
                          />
                          <input 
                            type="tel" 
                            name="clientPhone" 
                            placeholder="Mobile Number" 
                            className="inquiry-input" 
                            required 
                          />
                          <textarea 
                            name="clientMessage" 
                            rows="3" 
                            defaultValue={`I am interested in this ${selectedProperty.bhk} BHK ${selectedProperty.type} in ${selectedProperty.location}. Please contact me.`} 
                            className="inquiry-textarea"
                            required
                          ></textarea>
                          <button type="submit" className="btn-submit-inquiry">
                            Get Contact Details
                          </button>
                        </div>
                      </form>
                    ) : (
                      <div className="inquiry-success-box">
                        <div className="success-icon">✓</div>
                        <h4 className="success-title">Thank you, {inquiryStatus.name}!</h4>
                        <p className="success-desc">Your interest has been logged. The lister will call you shortly at the provided number.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer Area */}
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-col-about">
            <h3>MagicBricks<span>Bhubaneswar</span></h3>
            <p>Bhubaneswar's premier property finder website, showing handpicked flats, villas, and studio rentals in top spots across the temple city.</p>
          </div>

          <div className="footer-col">
            <h4>Top Localities</h4>
            <ul className="footer-links">
              <li><a href="#" onClick={(e) => { e.preventDefault(); setTempKeyword("Patia"); setSearchKeyword("Patia"); }}>Patia Properties</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setTempKeyword("Nayapalli"); setSearchKeyword("Nayapalli"); }}>Nayapalli Listings</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setTempKeyword("Jayadev Vihar"); setSearchKeyword("Jayadev Vihar"); }}>Jayadev Vihar Area</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setTempKeyword("Khandagiri"); setSearchKeyword("Khandagiri"); }}>Khandagiri Duplexes</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Property Types</h4>
            <ul className="footer-links">
              <li><a href="#" onClick={(e) => { e.preventDefault(); setSelectedType("Flat"); }}>Flats for Rent/Sale</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setSelectedType("Villa"); }}>Duplex Villas</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setSelectedType("Independent House"); }}>Independent Houses</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setSelectedType("Studio"); }}>1 BHK Studios</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Locality Newsletter</h4>
            <p style={{fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.75rem'}}>Receive prices & new project updates in Bhubaneswar.</p>
            <form onSubmit={(e) => { e.preventDefault(); alert("Subscribed! Thank you for choosing Magicbricks Bhubaneswar updates."); e.target.reset(); }} className="newsletter-form">
              <input type="email" placeholder="Your Email" className="newsletter-input" required />
              <button type="submit" className="btn-newsletter">Join</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© 2026 MagicBricks Bhubaneswar Ltd. Created for pair-programming demonstration.</div>
          <div className="footer-socials">
            <a href="#" className="social-icon">Facebook</a>
            <span style={{color: '#334155'}}>|</span>
            <a href="#" className="social-icon">Twitter</a>
            <span style={{color: '#334155'}}>|</span>
            <a href="#" className="social-icon">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Bind to window so index.html rendering script can find it
window.App = App;
