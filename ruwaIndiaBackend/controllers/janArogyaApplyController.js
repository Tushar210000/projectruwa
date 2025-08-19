const JanArogyaApply = require("../model/janArogyaApply");

// User Apply
exports.applyJanArogya = async (req, res) => {
  try {
    const { 
      name, email, phone, address, businessType, investmentCapacity, proposedLocation, 
      franchiseCategory, category, relevantExperience 
    } = req.body;

    const newApplication = new JanArogyaApply({
      name,
      email,
      phone,
      address,
      businessType,
      investmentCapacity,
      proposedLocation,
      franchiseCategory,
      category,
      relevantExperience,
      idProof: req.body.idProof || "",
      qualificationCertificate: req.body.qualificationCertificate || "",
      financialStatement: req.body.financialStatement || "",
      createdBy: req.user._id // from auth middleware
    });

    await newApplication.save();
    res.status(201).json({ message: "Application submitted successfully", application: newApplication });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Admin Update Status
exports.updateJanArogyaStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const application = await JanArogyaApply.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!application) return res.status(404).json({ message: "Application not found" });
    res.json({ message: "Status updated successfully", application });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
