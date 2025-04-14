import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import './Contactar.css';

// مكون صفحة الاتصال / Componente de la página de contacto
const Contactar = () => {
  // حالة بيانات النموذج / Estado para los datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // حالة تقديم النموذج / Estado para el estado del envío del formulario
  const [formStatus, setFormStatus] = useState({
    submitting: false, // جاري الإرسال / Enviando
    submitted: false, // تم الإرسال / Enviado
    error: null // خطأ / Error
  });

  // معالج تغيير المدخلات / Manejador de cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // معالج إرسال النموذج / Manejador de envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });

    try {
      // هنا سيتم وضع منطق إرسال النموذج الفعلي
      // Aquí iría la lógica real para enviar el formulario
      
      // محاكاة إرسال ناجح بعد 1.5 ثانية / Simulación de envío exitoso
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // إعادة تعيين الحالة بعد الإرسال الناجح / Resetear estado después de envío exitoso
      setFormStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      // في حالة حدوث خطأ / En caso de error
      setFormStatus({ 
        submitting: false, 
        submitted: false, 
        error: 'Error al enviar el mensaje' 
      });
    }
  };

  // عرض المكون / Renderizado del componente
  return (
    <div className="contact-page">
      {/* رأس الصفحة / Cabecera de la página */}
      <div className="contact-header">
        <h1>Contáctanos</h1>
        <p>Estamos aquí para ayudarte. Completa el formulario o usa nuestra información de contacto.</p>
      </div>

      {/* حاوية المحتوى الرئيسية / Contenedor principal */}
      <div className="contact-container">
        {/* قسم النموذج / Sección del formulario */}
        <div className="contact-form">
          <h2>Envíanos un mensaje</h2>
          
          {/* التحقق من حالة الإرسال / Verificación del estado de envío */}
          {formStatus.submitted ? (
            <div className="success-message">
              <p>¡Gracias por contactarnos! Te responderemos pronto.</p>
              <button 
                className="btn-new-message" 
                onClick={() => setFormStatus({ ...formStatus, submitted: false })}
              >
                Enviar nuevo mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* حقل الاسم / Campo de nombre */}
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* حقل البريد الإلكتروني / Campo de email */}
              <div className="form-group">
                <label htmlFor="email">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* حقل الموضوع / Campo de asunto */}
              <div className="form-group">
                <label htmlFor="subject">Asunto</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* حقل الرسالة / Campo de mensaje */}
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {/* زر الإرسال / Botón de envío */}
              <button 
                type="submit" 
                className="btn-submit"
                disabled={formStatus.submitting}
              >
                {formStatus.submitting ? 'Enviando...' : (
                  <>
                    <FaPaperPlane style={{ marginRight: '8px' }} />
                    Enviar Mensaje
                  </>
                )}
              </button>

              {/* عرض رسالة الخطأ إن وجدت / Mostrar mensaje de error si existe */}
              {formStatus.error && (
                <p className="error-message">{formStatus.error}</p>
              )}
            </form>
          )}
        </div>

        {/* قسم معلومات الاتصال / Sección de información de contacto */}
        <div className="contact-info">
          <h2>Información de Contacto</h2>
          <div className="contact-details">
            {/* معلومات البريد الإلكتروني / Información de email */}
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <h3>Correo Electrónico</h3>
                <p>contacto@miempresa.com</p>
              </div>
            </div>

            {/* معلومات الهاتف / Información de teléfono */}
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <div>
                <h3>Teléfono</h3>
                <p>+1 (123) 456-7890</p>
              </div>
            </div>

            {/* معلومات العنوان / Información de dirección */}
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h3>Dirección</h3>
                <p>Calle Principal 123, Ciudad, País</p>
              </div>
            </div>
          </div>

          {/* أوقات العمل / Horario de atención */}
          <div className="contact-hours">
            <h3>Horario de Atención</h3>
            <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
            <p>Sábados: 10:00 AM - 2:00 PM</p>
            <p>Domingos: Cerrado</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactar;